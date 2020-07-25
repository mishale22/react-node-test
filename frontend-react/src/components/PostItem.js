import React from 'react';
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

export default PostItem;
