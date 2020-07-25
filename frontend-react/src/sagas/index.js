import { put, takeLatest, call } from 'redux-saga/effects';
import { getData } from '../api/axios';
import { postsSuccess, postsError } from '../actions/index';

export function* fetchPosts() {
  try {
    const response = yield call(getData);
    yield put(postsSuccess(response.data.body));
  } catch (error) {
    yield put(postsError('Internal Server Error'));
  }
}

export function* actionWatcher() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}
