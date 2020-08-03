import { FETCH_POSTS, POSTS_SUCCESS, POSTS_ERROR, EDIT_POST } from '../types';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
