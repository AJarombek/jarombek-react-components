/**
 * Storyboard stories for the AJButtonGroup component.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJButtonGroup, AJButton} from '../src';

storiesOf('AJButton', module)
    .add('contained', () =>
        <AJButtonGroup type="contained">
            <AJButton type="contained" children="Button #1" />
            <AJButton type="contained" children="Button #2" />
            <AJButton type="contained" children="Button #3" />
        </AJButtonGroup>
    )
    .add('outlined', () =>
        <AJButtonGroup type="outlined">
            <AJButton type="outlined" children="Button #1" />
            <AJButton type="outlined" children="Button #2" />
            <AJButton type="outlined" children="Button #3" />
        </AJButtonGroup>
    )
    .add('text', () =>
        <AJButtonGroup type="text">
            <AJButton type="text" children="Button #1" />
            <AJButton type="text" children="Button #2" />
            <AJButton type="text" children="Button #3" />
        </AJButtonGroup>
    );