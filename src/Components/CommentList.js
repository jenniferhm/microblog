import React, { Component } from "react";

class CommentList extends Component {
  render() {
    return (
      <div className="comments-list">
        <h3>Comments:</h3>
        <ul>
          {this.props.post.comments
            ? (this.props.post.comments.map(comment =>
              <li>{comment}
                <button onClick={() => this.props.deleteComment({ commentToDelete: comment, postIdentification: this.props.post.id })}>X</button>
              </li>))
            : ""}
        </ul>
      </div>
    );
  }
}

export default CommentList;