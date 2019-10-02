import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    this.props.remove(this.props.match.params.id);
    this.props.history.push("/");
  }

  render() {
    const postList = this.props.posts;
    let post = postList.find(p => p.id === this.props.match.params.id)
    return (
      <div>
        <h4>{post.title}</h4>
        <button>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <p>{post.description}</p>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;