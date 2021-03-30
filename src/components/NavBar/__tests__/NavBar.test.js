/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';
// import { Theme, ThemeContext } from '../../ThemeContext';

describe('NavBar', () => {
  const mockProp = {
    allContentTypes: [
      { id: 1, items: [], instances: [] }, { id: 1, items: [], instances: [] },
    ],
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => jest.clearAllMocks());

  test('should render nav bar', () => {
    render(<BrowserRouter><NavBar {...mockProp} /></BrowserRouter>);
    screen.getByText('CMS+');
  });
});
