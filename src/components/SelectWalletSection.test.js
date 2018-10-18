/* eslint-env jest */

import React from 'react';
import SelectWalletSection from './SelectWalletSection';

import renderer from 'react-test-renderer';

// const onPressEvent = jest.fn();

test('renders correctly', () => {
  // const tree = renderer.create(<SelectWalletSection />).toJSON();
  const tree = true;

  // expect(tree).toMatchSnapshot();
  expect(tree).toBe(false);
});
