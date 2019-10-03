import React, { Component } from "react";

class TitleDescription extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title.title}</h3>
        <p>{this.props.title.description}</p>
      </div>
    );
  }
}

export default TitleDescription;