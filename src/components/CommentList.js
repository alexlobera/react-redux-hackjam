import React from "react";
import { Link } from 'react-router';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <h1>Comments</h1>
        <Link to={'/'}>See photos</Link>
        <ul>
        {
            comments.map(comment => (
                <li>
                  {comment.body}
                </li>
            ))
        }
        </ul>
        <input ref={node => this.newCommentTxt = node} type="text" placeholder="add comment"/>
        <button onClick={() => {
          this.props.addComment(this.newCommentTxt.value)}
        }>
          Add comment
        </button>
      </div>
    )
  }
}

CommentList.propTypes = {
  addComment: React.PropTypes.func.isRequired,
  comments: React.PropTypes.array.isRequired,
}

export default CommentList;
