/* eslint-env jest */

import React from 'react';
import GetCurrencyHistory from './GetCurrencyHistory';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<GetCurrencyHistory />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
