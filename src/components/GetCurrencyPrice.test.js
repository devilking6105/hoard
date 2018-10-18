/* eslint-env jest */

import React from 'react';
import GetCurrencyPrice from './GetCurrencyPrice';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<GetCurrencyPrice />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
