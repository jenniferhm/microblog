import React, { Component } from "react";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(comment) {
    this.props.deleteComment({ commentToDelete: comment, postIdentification: this.props.post.id })
  }

  render() {
    return (
      <div className="comments-list">
        <h3>Comments:</h3>
        <ul>
          {this.props.post.comments
            ? (this.props.post.comments.map(comment =>
              <li key={comment}>{comment}
                <button onClick={() => this.handleDelete(comment)}>X</button>
              </li>))
            : ""}
        </ul>
      </div>
    );
  }
}

export default CommentList;