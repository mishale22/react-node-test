import { takeLatest, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { getData } from '../../api/axios';
import { fetchPosts, actionWatcher } from '../../sagas/index';
import PostMock from '../../__mocks__/PostMock';
import { postsSuccess, postsError } from '../../actions';

describe('Sagas', () => {
  const genObject = actionWatcher();
  test('action watcher', () => {
    expect(genObject.next().value).toEqual(
      takeLatest('FETCH_POSTS', fetchPosts)
    );
  });

  test('Fetch Posts success', () => {
    const posts = [PostMock];

    return expectSaga(fetchPosts)
      .provide([[call(getData), posts]])
      .put(postsSuccess(posts))
      .run();
  });

  test('Fetch Posts error', () => {
    const error = new Error('Internal Server Error');

    return expectSaga(fetchPosts)
      .provide([[call(getData), throwError(error)]])
      .put(postsError(error.message))
      .run();
  });
});
