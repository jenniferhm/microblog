import React, { Component } from "react";
import TitleDescription from "./TitleDescription";
import { Link } from "react-router-dom";

class HomePageList extends Component {
  constructor(props) {
    super(props);

  }

async componentDidMount() { 
  let posts = await this.props.getAllPosts();
  console.log(posts)
  }

  render() {
    return (
      <div>
        <h1>HomePageList</h1>
        {this.props.posts
        ? 
        this.props.posts.map(post => (
          <Link to={`/${post.id}`} key={post.id}><TitleDescription post={post} /></Link>
        ))
        : ""}
      </div>
    );
  }
}

export default HomePageList;