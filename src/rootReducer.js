import { ADD_POST, EDIT_POST, REMOVE_POST } from "./actionTypes";

const INITIAL_STATE = { posts: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("THIS IS STATE,", state);
  switch (action.type) {
    case ADD_POST:
      const newPost = {...action.payload};
      return { ...state, posts: [...state.posts, newPost] };

    case EDIT_POST:
      return state;

    case REMOVE_POST:
      let idx = state.posts.findIndex(post => post.id === action.payload.id);
      let copy = [...state.posts];
      copy.splice(idx, 1)
      return {...state, posts: [...copy] };

    default:
      return state;
  }
}

export default rootReducer;