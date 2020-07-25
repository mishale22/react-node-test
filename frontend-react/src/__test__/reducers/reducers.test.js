import reducer from '../../reducers';
import PostMock from '../../__mocks__/PostMock';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};

describe('Reducers', () => {
  test('Initial State', () => {
    expect(reducer(initialState, '')).toEqual(initialState);
  });

  test('FETCH_POSTS', () => {
    const action = {
      type: 'FETCH_POSTS',
    };

    const expected = {
      posts: [],
      loading: true,
      error: '',
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('POSTS_SUCCESS', () => {
    const action = {
      type: 'POSTS_SUCCESS',
      payload: [PostMock],
    };

    const expected = {
      posts: [PostMock],
      loading: false,
      error: '',
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('POSTS_ERROR', () => {
    const action = {
      type: 'POSTS_ERROR',
      payload: 'Internal Server Error',
    };

    const expected = {
      posts: [],
      loading: false,
      error: 'Internal Server Error',
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('EDIT_POST', () => {
    const action = {
      type: 'EDIT_POST',
      payload: [PostMock],
    };

    const expected = {
      posts: [PostMock],
      loading: false,
      error: '',
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
