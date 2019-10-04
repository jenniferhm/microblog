import React, { Component } from "react";
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.props.getOnePost(this.props.match.params.id);
  }
  
  handleDelete(evt) {
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push("/");
  }

  handleVote(direction) {
    this.props.vote({direction, id: this.props.match.params.id});
  }

  render() {
    const { post } = this.props;
    return (
      <div className="home">
        {post
          ? (<div className="post">
            <h3>{post.title}</h3>
            <h5>{post.description}</h5>
            <p>{post.body}</p>
            <div>
            <Link className="other-button" to={`/${post.id}/edit`}><button className="other-button">Edit</button></Link>
            <button className="other-button" onClick={this.handleDelete}>Delete</button>
            </div><br></br>
            <p>Score: {post.votes}
             <span>
                <button className="iconButton" onClick={() => this.handleVote("up")}><i className="fas fa-thumbs-up"></i></button>
                <button className="iconButton" onClick={() => this.handleVote("down")}><i className="fas fa-thumbs-down"></i></button>
              </span>
            </p>
            <div className="card">
            <CommentList post={post} removeComment={this.props.removeComment} />
            <CommentForm newComment={this.props.newComment} post={post} />
            </div>
          </div>)
          : "This post does not exist."}
      </div>
    );
  }
}

export default Post;