import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PostMock from '../../__mocks__/PostMock';
import PrincipalView from '../../components/PrincipalView';

describe('PrincipalView tests', () => {
  it('Loading posts', () => {
    const props = {
      posts: [],
      loading: true,
      error: '',
      fetchAllPosts: jest.fn(),
      history: { push: jest.fn() },
    };
    const history = createBrowserHistory();
    const { getByText } = render(
      <Router history={history}>
        <PrincipalView {...props} />
      </Router>
    );
    expect(getByText('Loading')).toBeVisible();
  });

  it('Error posts', () => {
    const history = createBrowserHistory();
    const props = {
      posts: [],
      loading: false,
      error: 'Internal Server Error',
      fetchAllPosts: jest.fn(),
      history: { push: jest.fn() },
    };
    render(
      <Router history={history}>
        <PrincipalView {...props} />
      </Router>
    );
    expect(screen.getByText('Internal Server Error')).toBeVisible();
  });

  it('List of posts', () => {
    const history = createBrowserHistory();
    const props = {
      posts: [PostMock],
      loading: false,
      error: '',
      fetchAllPosts: jest.fn(),
      history: { push: jest.fn() },
    };
    render(
      <Router history={history}>
        <PrincipalView {...props} />
      </Router>
    );
    expect(screen.getByRole('article')).toBeVisible();
    expect(screen.getByRole('article')).toHaveClass('article-item');
  });

  it('Input change (PrincipalView bar)- Not found', () => {
    const history = createBrowserHistory();
    const props = {
      posts: [PostMock],
      loading: false,
      error: '',
      fetchAllPosts: jest.fn(),
      history: { push: jest.fn() },
    };
    render(
      <Router history={history}>
        <PrincipalView {...props} />
      </Router>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Post 1' },
    });
    expect(screen.getByText(/There are no posts/)).toBeVisible();
  });

  it('Input change (PrincipalView bar)- Item found', () => {
    const history = createBrowserHistory();
    const props = {
      posts: [PostMock],
      loading: false,
      error: '',
      fetchAllPosts: jest.fn(),
      history: { push: jest.fn() },
    };
    render(
      <Router history={history}>
        <PrincipalView {...props} />
      </Router>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'qui est' },
    });
    expect(screen.getByRole('article')).toBeVisible();
    expect(screen.getByRole('article')).toHaveClass('article-item');
    expect(screen.getByText(/qui est/)).toBeVisible();
  });
});
