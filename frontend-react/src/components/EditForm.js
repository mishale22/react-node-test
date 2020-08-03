import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editPost, fetchPosts } from '../actions';
import './EditForm.css';

const EditForm = ({
  posts,
  match: {
    params: { id },
  },
  editPost,
  fetchAllPosts,
  loading,
  history,
}) => {
  const [form, setForm] = useState({
    title: '',
    body: '',
  });
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
    } else {
      if (id) {
        const post = posts.find((post) => post.id === Number(id));
        setForm(post);
      } else {
        setSearch(true);
      }
    }
  }, [fetchAllPosts, posts, id]);

  const handleOnChange = (event) => {
    if (message) {
      setMessage('');
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (search) {
      const post = form.title
        ? posts.find((post) =>
            post.title.includes(form.title.trim().toLowerCase())
          )
        : undefined;
      if (post) {
        setForm({ ...form, ...post });
        setSearch(false);
        setMessage('');
      } else {
        setMessage('There is no post that match the title');
      }
    } else {
      const postsCopy = [...posts];
      const postId = id ? Number(id) : form.id;
      const postIndex = postsCopy.findIndex((post) => post.id === postId);
      postsCopy[postIndex] = form;
      editPost(postsCopy);
      setMessage('Post was updated successfully.');
      setSearch(true);
    }
  };

  const alert = (message) => {
    return <div>{message}</div>;
  };

  return (
    <section className="section-edit">
      <h1>Edit Post</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <form className="section-edit__form" onSubmit={handleOnSubmit}>
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleOnChange} />
          {!search && <label>Body</label>}
          {!search && (
            <textarea name="body" value={form.body} onChange={handleOnChange} />
          )}
          <button type="submit">Submit</button>
        </form>
      )}
      {message ? alert(message) : null}
      <button
        type="button"
        onClick={() => {
          history.go(-1);
        }}
      >
        Go back
      </button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (post) => dispatch(editPost(post)),
    fetchAllPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
