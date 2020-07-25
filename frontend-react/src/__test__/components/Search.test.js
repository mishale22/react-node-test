import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Search from '../../components/Search';

describe('Search Component', () => {
  test('Component render', () => {
    const search = shallow(
      <ProviderMock>
        <Search />
      </ProviderMock>
    );
    expect(search.length).toEqual(1);
  });
});
