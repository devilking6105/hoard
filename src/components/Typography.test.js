/* eslint-env jest */

import React from 'react';
import T from 'components/Typography';

import renderer from 'react-test-renderer';
describe('<Typography/>', () => {
  test('<T.Light/>', () => {
    const tree = renderer.create(<T.Light>Light</T.Light>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.Heading/>', () => {
    const tree = renderer.create(<T.Heading>Heading</T.Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.SubHeading/>', () => {
    const tree = renderer
      .create(<T.SubHeading>SubHeading</T.SubHeading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.GrayedOut/>', () => {
    const tree = renderer.create(<T.GrayedOut>GrayedOut</T.GrayedOut>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.SemiBold/>', () => {
    const tree = renderer.create(<T.SemiBold>SemiBold</T.SemiBold>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.Small/>', () => {
    const tree = renderer.create(<T.Small>Small</T.Small>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.ButtonText/>', () => {
    const tree = renderer
      .create(<T.ButtonText>ButtonText</T.ButtonText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.Price/>', () => {
    const tree = renderer.create(<T.Price>Price</T.Price>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.PriceLarge/>', () => {
    const tree = renderer
      .create(<T.PriceLarge>PriceLarge</T.PriceLarge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.PriceHeading/>', () => {
    const tree = renderer
      .create(<T.PriceHeading>PriceHeading</T.PriceHeading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.TitleAlternate/>', () => {
    const tree = renderer
      .create(<T.TitleAlternate>TitleAlternate</T.TitleAlternate>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.SemiBoldAlternate/>', () => {
    const tree = renderer
      .create(<T.SemiBoldAlternate>SemiBoldAlternate</T.SemiBoldAlternate>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.SubtitleAlternate/>', () => {
    const tree = renderer
      .create(<T.SubtitleAlternate>SubtitleAlternate</T.SubtitleAlternate>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.SmallAlternate/>', () => {
    const tree = renderer
      .create(<T.SmallAlternate>SmallAlternate</T.SmallAlternate>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<T.Paragraph/>', () => {
    const tree = renderer.create(<T.Paragraph>Paragraph</T.Paragraph>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
