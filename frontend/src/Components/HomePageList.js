import React, { PureComponent } from "react";
import TitleDescription from "./TitleDescription";

class HomePageList extends PureComponent {
  componentDidMount() {
    this.props.getAllPosts();
  }

  componentDidUpdate() {
    this.props.getAllPosts();
  }

  render() {
    let titleCards = this.props.titles;

    titleCards.sort(function (a, b) {
      return b.votes - a.votes;
    });

    return (
      <div className="home">
      <p className="homepage-title">Small Blog, Big Ideas</p>
      <div className="home-page-list">

        {titleCards
          ?
          titleCards.map(title => (
            <TitleDescription key={title.id} vote={this.props.vote} title={title} />
          ))
          : ""}
      </div>
      </div >
    );
  }
}

export default HomePageList;