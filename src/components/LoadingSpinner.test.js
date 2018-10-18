/* eslint-env jest */

import React from 'react';
import LoadingSpinner from './LoadingSpinner';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<LoadingSpinner />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
