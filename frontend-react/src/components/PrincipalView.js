import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Posts from './Posts';
// import Button from '@material-ui/core/Button';
import './Search.css';

const PrincipalView = ({ posts, loading, error, fetchAllPosts, history }) => {
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
    return <Posts posts={filteredPosts} history={history} />;
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
      <SearchBar handleOnChange={handleOnChange} />
      <button type="button">
        <Link to="/post">Edit Post</Link>
      </button>
      {/* <Button component={Link} to="/post">
        Edit Post
      </Button> */}

      {showContent()}
    </section>
  );
};

export default PrincipalView;
