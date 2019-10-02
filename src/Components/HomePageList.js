import React, { Component } from "react";
import TitleDescription from "./TitleDescription";
import { Link } from "react-router-dom";

class HomePageList extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h1>HomePageList</h1>
        {this.props.posts.map(post => (
          <Link to={`/${post.id}`}><TitleDescription key={post.id} post={post} /></Link>
        ))}
      </div>
    );
  }
}

export default HomePageList;