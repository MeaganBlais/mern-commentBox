import React, { Component } from 'react';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="comment">
          <h2>Comments:</h2>
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    )
  }
}

export default CommentBox;