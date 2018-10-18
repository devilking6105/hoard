/* eslint-env jest */

import React from 'react';
import SelectableImageHeader from './SelectableImageHeader';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<SelectableImageHeader />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
