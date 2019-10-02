import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePageListContainer from "./Containers/HomePageListContainer";
import Post from "./Components/Post";
import PostForm from "./PostForm";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomePageListContainer />} />
        <Route exact path="/:id" render={(rtProps) => <Post {...rtProps} post={this.props.post} />} />
        <Route exact path="/:id/edit" render={(rtProps) => <PostForm {...rtProps} post={this.props.post} />} />
        <Route exact path="/newpost/new" render={(rtProps) => <PostForm {...rtProps} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;