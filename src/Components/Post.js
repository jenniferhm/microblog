import React, { Component } from "react";
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

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
    let { post } = this.props;
    return (
      <div>
        <h4>{post.title}</h4>
        <Link to={`/${post.id}/edit`}><button>Edit</button></Link>
        <button onClick={this.handleDelete}>Delete</button>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <CommentList post={post} deleteComment={this.props.deleteComment} />
        <CommentForm addComment={this.props.addComment} post={post} />
      </div>
    );
  }
}

export default Post;