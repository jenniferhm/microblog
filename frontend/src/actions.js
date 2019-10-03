import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT, GET_POST, GET_POSTS } from "./actionTypes";
import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/posts'

function add(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

function edit(editedPost) {
  return {
    type: EDIT_POST,
    payload: editedPost
  };
}

function remove(id) {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    payload: {comment, postId}
  }
}

function deleteComment(commentAndPostId) {
  return {
    type: DELETE_COMMENT,
    payload: commentAndPostId
  }
}

function getPosts(posts) {
  return { 
    type: GET_POSTS, 
    payload: posts 
  }
}

function getPost(post) {
  return { 
    type: GET_POST, 
    payload: post 
  }
}

function handleError(error) {
  return {
    type: "Error",
    error
  }
}

export function getAllPosts() {
  return async function thunk(dispatch) {
    try {
      let posts = await axios.get(`${BASE_URL}/`);
      dispatch(getPosts(posts.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function getOnePost(id) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.get(`${BASE_URL}/${id}`);
      dispatch(getPost(post.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function addPost(post) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/`, post);
      dispatch(add(res.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function editPost(post) {
  let { id } = post
  return async function thunk(dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/${id}`, { post });
      dispatch(edit(res.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function deletePost(id) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.delete(`${BASE_URL}/${id}`);
      dispatch(remove(post.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function newComment(commentData) {
  let { comment, postId } = commentData;
  return async function thunk(dispatch) {
    try {
      let post = await axios.post(`${BASE_URL}/${postId}/comments/`, {text: comment});
      dispatch(addComment(post.data, postId));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}

export function removeComment(commentData) {
  let { postIdentification, commentId } = commentData
  return async function thunk(dispatch) {
    try {
      let post = await axios.delete(`${BASE_URL}/${postIdentification}/comments/${commentId}`);
      dispatch(deleteComment(post.data));
    }
    catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}