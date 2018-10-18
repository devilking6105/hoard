/* eslint-env jest */

import React from 'react';
import Conditional from './Conditional';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<Conditional />).toJSON();
  const tree = true;
  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
