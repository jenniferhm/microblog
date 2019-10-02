import { connect } from "react-redux";
import HomePageList from "../Components/HomePageList";
import { add, edit, remove } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, edit, remove }
);

export default connectedComponent(HomePageList);
