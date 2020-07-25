import { fetchPosts, editPost, postsSuccess, postsError } from '../../actions';
import PostMock from '../../__mocks__/PostMock';

describe('Actions', () => {
  test('fetchPosts Action', () => {
    const expected = {
      type: 'FETCH_POSTS',
    };
    expect(fetchPosts()).toEqual(expected);
  });

  test('editPost Action', () => {
    const payload = PostMock;
    const expected = {
      type: 'EDIT_POST',
      payload,
    };
    expect(editPost(payload)).toEqual(expected);
  });

  test('postSuccess Action', () => {
    const payload = [PostMock];
    const expected = {
      type: 'POSTS_SUCCESS',
      payload,
    };
    expect(postsSuccess(payload)).toEqual(expected);
  });

  test('postError Action', () => {
    const expected = {
      type: 'POSTS_ERROR',
      payload: 'Internal Server Error',
    };
    expect(postsError('Internal Server Error')).toEqual(expected);
  });
});
