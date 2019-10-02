import React, { Component } from "react";
import { connect } from "react-redux";
import { add, edit } from "./actions";
import uuid from "uuid/v4";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formView: "",
      title: "",
      description: "",
      body: "",
      id: uuid()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.match.path === "/newpost/new"
    ? this.setState({formView: "add"})
    : this.setState({formView: "edit"});
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.state.formView === "add"
    ? this.props.add(this.state)
    : this.props.edit(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.value} />
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" name="description" onChange={this.handleChange} value={this.state.value} />
          <label htmlFor="body">Body: </label>
          <textarea type="text" id="body" name="body" onChange={this.handleChange} value={this.state.value} />
          <button>Save</button>
        </form>
        <button onClick={() => this.props.history.push("/")}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  add,
  edit
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);