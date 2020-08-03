import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from '../../api/axios';
import { fetchPosts, actionWatcher } from '../../sagas/index';
import PostMock from '../../__mocks__/PostMock';
import { postsSuccess, postsError } from '../../actions';

describe('Sagas', () => {
  test('ActionWatcher test', () => {
    const genObject = actionWatcher();
    expect(genObject.next().value).toEqual(
      takeLatest('FETCH_POSTS', fetchPosts)
    );
  });

  test('fetchPosts success', () => {
    const genObject = fetchPosts();
    const response = { data: { body: [PostMock] } };

    expect(genObject.next().value).toEqual(call(getData));
    expect(genObject.next(response).value).toEqual(
      put(postsSuccess(response.data.body))
    );
    expect(genObject.next()).toEqual({ done: true, value: undefined }); //generator finished
  });

  test('fetchPosts failure', () => {
    const genObject = fetchPosts();
    const response = {};

    expect(genObject.next().value).toEqual(call(getData));
    expect(genObject.next(response).value).toEqual(
      put(postsError('Internal Server Error'))
    );
    expect(genObject.next()).toEqual({ done: true, value: undefined }); //generator finished
  });
});
