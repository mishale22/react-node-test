import React from 'react';
import PropTypes from 'prop-types';
import './PostItem.css';

const PostItem = (props) => {
  return (
    <article
      className="article-item"
      onClick={() => {
        props.history.push(`/post/${props.id}`);
      }}
    >
      <h2 id="title">{props.title}</h2>
      <p id="body">{props.body}</p>
    </article>
  );
};

PostItem.propTypes = {
  history: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostItem;
