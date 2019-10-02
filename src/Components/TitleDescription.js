import React, { Component } from "react";

class TitleDescription extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.description}</p>
      </div>
    );
  }
}

export default TitleDescription;