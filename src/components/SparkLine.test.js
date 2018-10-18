/* eslint-env jest */

import React from 'react';
import SparkLine from './SparkLine';

import renderer from 'react-test-renderer';

const MockedComponent = () => (
  <SparkLine positive={false} children={[1, 2, 3]} />
);

describe('<SparkLine />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
