import React, { Component } from "react";

class TitleDescription extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title.title}</h3>
        <p>{this.props.title.description}</p>
        <p>0 votes. <span><i class="fas fa-thumbs-up"></i></span> <span><i class="fas fa-thumbs-down"></i></span></p>
      </div>
    );
  }
}

export default TitleDescription;