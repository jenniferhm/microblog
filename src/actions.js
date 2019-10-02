import { ADD_POST, EDIT_POST, REMOVE_POST } from "./actionTypes";

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
  };
}
