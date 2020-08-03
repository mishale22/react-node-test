import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar tests', () => {
  it('Component renders', () => {
    const handleOnChange = jest.fn();
    render(<SearchBar handleOnChange={handleOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Callback call', () => {
    const handleOnChange = jest.fn();
    render(<SearchBar handleOnChange={handleOnChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'qui est' },
    });
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
