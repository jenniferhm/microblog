import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      postId: this.props.post.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      comment: "",
      postId: this.props.post.id
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="New Comment"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;