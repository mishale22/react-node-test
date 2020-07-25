import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import PostMock from '../../__mocks__/PostMock';
import PostItem from '../../components/PostItem';

const props = {
  history: {},
  ...PostMock,
};
describe('PostItem Component', () => {
  test('Component render', () => {
    const postItem = shallow(
      <ProviderMock>
        <PostItem {...props} />
      </ProviderMock>
    );
    expect(postItem.length).toEqual(1);
  });

  test('Title and body elements of the component', () => {
    const postItem = mount(
      <ProviderMock>
        <PostItem {...props} />
      </ProviderMock>
    );
    expect(postItem.find('#title').text()).toEqual(PostMock.title);
    expect(postItem.find('#body').text()).toEqual(PostMock.body);
  });
});
