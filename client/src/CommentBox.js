import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList'

class CommentBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="comment">
          <h2>Comments:</h2>
          <CommentList />
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    )
  }
}

export default CommentBox;