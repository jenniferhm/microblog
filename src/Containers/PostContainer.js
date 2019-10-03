import { connect } from "react-redux";
import Post from "../Components/Post";
import { deleteComment, addComment, edit, remove } from "../actions";

function mapStateToProps(state, ownProps) {
  let post = state.posts.find(p => (
    p.id === ownProps.match.params.id
  ));
  return {
    post
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deleteComment, addComment, edit, remove }
);

export default connectedComponent(Post);
