import React from 'react';
import AJMobileHamburger from '../src/AJMobileHamburger/AJMobileHamburger';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJMobileHamburger} component.
 * @author Andrew Jarombek
 * @since 12/19/2019
 */

it('renders correctly', () => {
  const tree = renderer.create(<AJMobileHamburger />).toJSON();
  expect(tree).toMatchSnapshot();
});
