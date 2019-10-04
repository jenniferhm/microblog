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
    return (
      <div className="comments-list">
        <h5>Comments:</h5>
        <ul>
          {this.props.post.comments
            ? (this.props.post.comments.map(comment =>
              <li className="list-group-item" key={comment.id}>{comment.text}
                <button className="x-button" onClick={() => this.handleDelete(comment.id)}>X</button>
              </li>))
            : ""}
        </ul>
      </div>
    );
  }
}

export default CommentList;