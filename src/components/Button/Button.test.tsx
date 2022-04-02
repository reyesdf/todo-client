import React from 'react';
import renderer from 'react-test-renderer';
import { CustomButton } from './Button';

test('Button', () => {
  const component = renderer.create(<CustomButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
