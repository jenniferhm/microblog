import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost, editPost } from "./../actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formView: "add",
      title: "",
      description: "",
      body: "",
      id: "",
      comments: []
    }
    if (props.match.path !== "/newpost/new") {
      this.state = {
        formView: "edit",
        title: props.post.title,
        description: props.post.description,
        body: props.post.body,
        id: props.post.id,
        comments: props.post.comments
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.state.formView === "add"
      ? this.props.addPost(this.state)
      : this.props.editPost(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="home">
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="title">Title: </label>
            <input className="form-control-sm" type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="form-group" >
            <label htmlFor="description">Description: </label>
            <input className="form-control-sm" type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} />
          </div>
          <div className="form-group" >
            <label htmlFor="body">Body: </label>
            <textarea className="form-control-sm two" type="text" id="body" name="body" onChange={this.handleChange} value={this.state.body} />
          </div>
          <div className="form-group" >
            <button className="other-button">Save</button>
            </div>
        </form>
          <button className="other-button" onClick={() => this.props.history.push("/")}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let post = state.posts.find(p => (
    p.id === +ownProps.match.params.id
  ));

  return {
    post
  }
}

const mapDispatchToProps = {
  addPost,
  editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);