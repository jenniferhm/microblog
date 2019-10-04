import { connect } from "react-redux";
import HomePageList from "../Components/HomePageList";
import { addPost, editPost, deletePost, getAllPosts, vote } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost, editPost, deletePost, getAllPosts, vote }
);

export default connectedComponent(HomePageList);
