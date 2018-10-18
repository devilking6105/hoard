/* eslint-env jest */

import React from 'react';
import SwipableList from './SwipableList';

import renderer from 'react-test-renderer';

const MockedComponent = () => (
  <SwipableList
    title={'Default Asset'}
    amount={'$45,524.92'}
    change={'5.24%'}
    colors={'#0F716A'}
    data={[]}
  />
);

describe('<SwipableList />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
