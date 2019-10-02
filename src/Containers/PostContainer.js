import { connect } from "react-redux";
import Post from "../Components/Post";
import { deleteComment, addComment, edit, remove } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deleteComment, addComment, edit, remove }
);

export default connectedComponent(Post);
