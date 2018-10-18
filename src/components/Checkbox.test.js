/* eslint-env jest */

import React from 'react';
import Checkbox from './Checkbox';

import renderer from 'react-test-renderer';

const onPressEvent = jest.fn();

test('renders correctly', () => {
  const tree = renderer.create(<Checkbox onPress={onPressEvent} />).toJSON();
  expect(tree).toMatchSnapshot();
});
