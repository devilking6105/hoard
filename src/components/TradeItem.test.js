/* eslint-env jest */

import React from 'react';
import TradeItem from './TradeItem';

import renderer from 'react-test-renderer';

const mockedEvent = jest.fn();

const mockTransaction = {
  fiatTrade: true,
  tradePrice: 10,
  price: 1,
};

const mockWallet = {
  symbol: 'TEST',
};

const MockedComponent = () => (
  <TradeItem
    wallet={mockWallet}
    transaction={mockTransaction}
    onUpdate={mockedEvent}
    selected={true}
  />
);

describe('<TradeItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
