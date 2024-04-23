/**
 * Storyboard stories for the AJMobileHamburger component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJMobileHamburger, AJTextButton } from '../src';

storiesOf('AJMobileHamburger', module)
  .add('default', () => <AJMobileHamburger />)
  .add('with ref', () => {
    const hamburgerRef = createRef();

    return (
      <>
        <AJTextButton onClick={() => hamburgerRef.current.click()}>Toggle</AJTextButton>
        <AJMobileHamburger ref={hamburgerRef} />
      </>
    );
  });
