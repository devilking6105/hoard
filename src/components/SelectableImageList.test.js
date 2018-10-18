/* eslint-env jest */

import React from 'react';
import SelectableImageList from './SelectableImageList';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<SelectableImageList />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
