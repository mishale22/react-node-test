import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = ({ posts, loading, error, fetchAllPosts, history }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
    }
  }, [fetchAllPosts, posts]);

  const handleOnChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const renderPosts = () => {
    const filteredPosts = search.length
      ? posts.filter((post) => post.title.includes(search.trim().toLowerCase()))
      : posts;
    if (!filteredPosts.length) {
      return (
        <h2 className="section-search__notfound">
          There are no posts that match the title
        </h2>
      );
    }
    return (
      <div className="section-search__posts">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} {...post} history={history} />
        ))}
      </div>
    );
  };

  const showContent = () => {
    if (loading) {
      return <h2>Loading</h2>;
    }
    if (error) {
      return <h2>{error}</h2>;
    }
    return renderPosts();
  };

  return (
    <section className="section-search">
      <h1>Posts</h1>
      <input value={search} onChange={handleOnChange} placeholder="Search..." />
      <button type="button">
        <Link to="/post">Edit Post</Link>
      </button>
      {showContent()}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
