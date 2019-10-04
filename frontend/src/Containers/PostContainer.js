import { connect } from "react-redux";
import Post from "../Components/Post";
import { removeComment, newComment, editPost, deletePost, getOnePost, vote } from "../actions";

function mapStateToProps(state, ownProps) {
  let post = state.posts.find(p => (
    p.id === +ownProps.match.params.id
  ));
  return {
    post
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { removeComment, newComment, editPost, deletePost, getOnePost, vote }
);

export default connectedComponent(Post);
