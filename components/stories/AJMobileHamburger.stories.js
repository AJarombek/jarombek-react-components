/**
 * Storyboard stories for the AJMobileHamburger component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React, { createRef } from 'react';
import { AJMobileHamburger, AJTextButton } from '../src';

export default {
  title: 'AJ/MobileHamburger',
  component: AJMobileHamburger,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJMobileHamburger />,
};

export const WithRef = {
  render: () => {
    const hamburgerRef = createRef();

    return (
      <>
        <AJTextButton onClick={() => hamburgerRef.current.click()}>Toggle</AJTextButton>
        <AJMobileHamburger ref={hamburgerRef} />
      </>
    );
  },
};
