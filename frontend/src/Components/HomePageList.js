import React, { PureComponent } from "react";
import TitleDescription from "./TitleDescription";
import { Link } from "react-router-dom";

class HomePageList extends PureComponent {
  componentDidMount() {
    this.props.getAllPosts();
  }

  componentDidUpdate() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div>
        <h1>HomePageList</h1>
        {this.props.titles
          ?
          this.props.titles.map(title => (
            <Link to={`/${title.id}`} key={title.id}><TitleDescription title={title} /></Link>
          ))
          : ""}
      </div>
    );
  }
}

export default HomePageList;