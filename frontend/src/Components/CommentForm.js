import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("THIS IS POST ID", this.props.post.id)
    this.props.newComment({...this.state, postId: this.props.post.id});
    this.setState({
      comment: ""
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