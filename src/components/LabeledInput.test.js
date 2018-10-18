/* eslint-env jest */

import React from 'react';
import LabeledInput from './LabeledInput';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<LabeledInput />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
