/* eslint-env jest */

import React from 'react';
import Card from './Card';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<Card />).toJSON();
  const tree = true;
  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
