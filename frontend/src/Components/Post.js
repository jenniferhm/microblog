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
      <div>
        {post
          ? (<div>
            <h4>{post.title}</h4>
            <Link to={`/${post.id}/edit`}><button>Edit</button></Link>
            <button onClick={this.handleDelete}>Delete</button>
            <p>{post.votes} votes.
             <span>
                <button onClick={() => this.handleVote("up")}><i className="fas fa-thumbs-up"></i></button>
                <button onClick={() => this.handleVote("down")}><i className="fas fa-thumbs-down"></i></button>
              </span>
            </p>
            <p>{post.description}</p>
            <p>{post.body}</p>
            <CommentList post={post} removeComment={this.props.removeComment} />
            <CommentForm newComment={this.props.newComment} post={post} />
          </div>)
          : "This post does not exist."}
      </div>
    );
  }
}

export default Post;