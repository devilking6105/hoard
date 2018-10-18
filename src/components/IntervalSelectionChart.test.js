/* eslint-env jest */

import React from 'react';
import IntervalSelectionChart from './IntervalSelectionChart';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<IntervalSelectionChart />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
