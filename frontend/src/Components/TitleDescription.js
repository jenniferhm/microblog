import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleDescription extends Component {
  constructor(props) {
    super(props);

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(direction) {
    this.props.vote({direction, id: this.props.title.id});
  }

  render() {
    const { title } = this.props;
    return (
      <div className="card">
        <Link className="card-link" to={`/${title.id}`} key={title.id}>
          <h3 className="card-title">{title.title}</h3>
          <p className="card-text">{title.description}</p>
        </Link>
        <p className="card-body">{title.votes} votes.
          <span>
            <button className="iconButton" onClick={() => this.handleVote("up")}><i className="fas fa-thumbs-up"></i></button>
            <button className="iconButton" onClick={() => this.handleVote("down")}><i className="fas fa-thumbs-down"></i></button>
          </span>
        </p>
      </div>
    );
  }
}

export default TitleDescription;