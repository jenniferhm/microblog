import React, { Component } from "react";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(commentId) {
    this.props.removeComment({ commentId: commentId, postIdentification: this.props.post.id })
  }

  render() {
    console.log("WE ARE IN COMMENT LIST")
    return (
      <div className="comments-list">
        <h3>Comments:</h3>
        <ul>
          {this.props.post.comments
            ? (this.props.post.comments.map(comment =>
              <li key={comment.id}>{comment.text}
                <button onClick={() => this.handleDelete(comment.id)}>X</button>
              </li>))
            : ""}
        </ul>
      </div>
    );
  }
}

export default CommentList;