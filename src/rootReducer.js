import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

const INITIAL_STATE = { posts: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("THIS IS STATE,", state);
  switch (action.type) {
    case ADD_POST:
      let newPost = { ...action.payload };
      return { ...state, posts: [...state.posts, newPost] };

    case EDIT_POST:
      let editedPost = { ...action.payload };
      return {
        ...state, posts:
          state.posts.map(post => (
            post.id === action.payload.id
              ? { ...editedPost }
              : post
          ))
      }

    case REMOVE_POST:
      let idx = state.posts.findIndex(post => post.id === action.payload.id);
      let copy = [...state.posts];
      copy.splice(idx, 1)
      return { ...state, posts: [...copy] };

    case ADD_COMMENT:
      let { postId, comment } = action.payload
      return {
        ...state, posts:
          state.posts.map(post => (
            post.id === postId
              ? { ...post, comments: [...post.comments, comment] }
              : post
          ))
      };

    case DELETE_COMMENT:
      let { postIdentification, commentToDelete } = action.payload
      let postidx = state.posts.findIndex(post => post.id === postIdentification);
      let commentidx = state.posts[postidx].comments.findIndex(comment => comment === commentToDelete);
      let commentsCopy = [...state.posts[postidx].comments];
      commentsCopy.splice(commentidx, 1)
      return { ...state, posts:
        state.posts.map(post => (
          post.id === postIdentification
            ? { ...post, comments: [...commentsCopy] }
            : post
        )) };


    default:
      return state;
  }
}

export default rootReducer;