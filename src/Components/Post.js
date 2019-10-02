import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    this.props.remove(this.props.post.id);
    this.props.history.push("/");
  }

  render() {
    const { title, description, body} = this.props.post
    return (
      <div>
        <h4>{title}</h4>
        <button>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <p>{description}</p>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;