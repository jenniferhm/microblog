import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function add(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function edit(editedPost) {
  return {
    type: EDIT_POST,
    payload: editedPost
  };
}

export function remove(id) {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

export function addComment(commentAndPostId) {
  return {
    type: ADD_COMMENT,
    payload: commentAndPostId
  }
}

export function deleteComment(commentAndPostId) {
  return {
    type: DELETE_COMMENT, 
    payload: commentAndPostId
  }
}
