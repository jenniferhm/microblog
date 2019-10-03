import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT, GET_POST, GET_POSTS } from "./actionTypes";

const INITIAL_STATE = { posts: [], titles: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { ...action.payload };
      return { ...state, posts: [...state.posts, newPost] };

    case EDIT_POST:
      let editedPost = { ...action.payload };
      return {
        ...state,
        posts: state.posts.map(post => (
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
        ...state,
        posts: state.posts.map(post => (
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        ))
      };

    case DELETE_COMMENT:
      let { postIdentification, commentToDelete } = action.payload
      let postIdx = state.posts.findIndex(post => post.id === postIdentification);
      let commentIdx = state.posts[postIdx].comments.findIndex(comment => comment === commentToDelete);
      let commentsCopy = [...state.posts[postIdx].comments];
      commentsCopy.splice(commentIdx, 1)
      return {
        ...state,
        posts: state.posts.map(post => (
          post.id === postIdentification
            ? { ...post, comments: [...commentsCopy] }
            : post
        ))
      };

    case GET_POSTS:
      return { ...state, titles: [...state.titles, ...action.payload] };

    case GET_POST:
      let foundPost = state.posts.find(post => post.id === action.payload.id)
      if (!foundPost) {
        return {
          ...state,
          posts: [...state.posts, ...action.payload]
        }
      }
      return state;

    default:
      return state;
  }
}

export default rootReducer;