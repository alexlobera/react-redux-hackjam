import React, { Component } from 'react';
import CommentList from "../components/CommentList";
import { connect } from 'react-redux';
import * as api from '../api/Comments'

class CommentListContainer extends Component {
  componentDidMount() {

  }

  addComment(body, title) {
    api.addComment(body, title = 'No title!')
      .then(response => response.json())
      .then(commentId => { console.log(commentId)})
  }

  render() {
    return (<CommentList addComment={this.addComment} comments={[]} />)
  }
}

export default CommentListContainer;
