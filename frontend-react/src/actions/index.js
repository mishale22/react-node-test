import { FETCH_POSTS, EDIT_POST, POSTS_SUCCESS, POSTS_ERROR } from '../types';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const editPost = (payload) => ({
  type: EDIT_POST,
  payload,
});

export const postsSuccess = (payload) => ({
  type: POSTS_SUCCESS,
  payload,
});

export const postsError = (payload) => ({
  type: POSTS_ERROR,
  payload,
});
