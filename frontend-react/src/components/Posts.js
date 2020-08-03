import React from 'react';
import PostItem from './PostItem';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './Search.css';

const Posts = (props) => {
  return (
    <div className="section-search__posts">
      {props.posts.map((post) => (
        <PostItem key={post.id} {...post} history={props.history} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  history: PropTypes.object,
};

export default Posts;
