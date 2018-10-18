/* eslint-env jest */

import React from 'react';
import { Text } from 'react-native';
import Button from './Button';

import renderer from 'react-test-renderer';

const onPressEvent = jest.fn();

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Button onPress={onPressEvent}>
        <Text>Test</Text>
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
