/* eslint-env jest */

import React from 'react';
import UnderlineInput from './UnderlineInput';

import renderer from 'react-test-renderer';

const onChangeText = jest.fn();

const MockedComponent = () => (
  <UnderlineInput label="Label" onChangeText={onChangeText} />
);

test('renders correctly', () => {
  const tree = renderer.create(<MockedComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
