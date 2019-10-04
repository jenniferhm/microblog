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
      <div>
        <Link to={`/${title.id}`} key={title.id}>
          <h3>{title.title}</h3>
          <p>{title.description}</p>
        </Link>
        <p>{title.votes} votes.
          <span>
            <button onClick={() => this.handleVote("up")}><i className="fas fa-thumbs-up"></i></button>
            <button onClick={() => this.handleVote("down")}><i className="fas fa-thumbs-down"></i></button>
          </span>
        </p>
      </div>
    );
  }
}

export default TitleDescription;