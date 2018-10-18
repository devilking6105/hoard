/* eslint-env jest */

import React from 'react';
import SuccessFailureScreen from './SuccessFailureScreen';

import renderer from 'react-test-renderer';

export const TYPE_SUCCESS = 'success';
const mockedEvent = jest.fn();

const MockedComponent = () => (
  <SuccessFailureScreen
    type={TYPE_SUCCESS}
    mainButtonText={'Button'}
    onPressMain={mockedEvent}
  />
);

describe('<SuccessFailureScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
