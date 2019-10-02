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

export function addComment(commentAndId) {
  return {
    type: ADD_COMMENT,
    payload: commentAndId
  }
}

export function deleteComment(comment) {
  return {
    type: DELETE_COMMENT, 
    payload: comment
  }
}
