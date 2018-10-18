/* eslint-env jest */

import React from 'react';
import ValueStatement from './ValueStatement';

import renderer from 'react-test-renderer';

const MockedComponent = () => (
  <ValueStatement change="Change" positive={true} title="Title" value="Value" />
);

describe('<ValueStatement />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// it('componentWillMount: should set the passed initialCountValue to state', () => {
//   const wrapper = shallow(<Counter initialCountValue={2} />);
//   expect(wrapper.instance().state.count).toBe(2);
// });
