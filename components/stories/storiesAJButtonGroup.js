/**
 * Storyboard stories for the AJButtonGroup component.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJButtonGroup, AJButton} from '../src';

storiesOf('AJButtonGroup', module)
    .add('contained', () =>
        <AJButtonGroup>
            <AJButton type="contained" children="Button #1" />
            <AJButton type="contained" children="Button #2" />
            <AJButton type="contained" children="Button #3" />
        </AJButtonGroup>
    )
    .add('outlined', () =>
        <AJButtonGroup>
            <AJButton type="outlined" children="Button #1" />
            <AJButton type="outlined" children="Button #2" />
            <AJButton type="outlined" children="Button #3" />
        </AJButtonGroup>
    )
    .add('text', () =>
        <AJButtonGroup>
            <AJButton type="text" children="Button #1" />
            <AJButton type="text" children="Button #2" />
            <AJButton type="text" children="Button #3" />
        </AJButtonGroup>
    )
    .add('two buttons', () =>
        <AJButtonGroup>
            <AJButton type="contained" children="Button #1" />
            <AJButton type="contained" children="Button #2" />
        </AJButtonGroup>
    )
    .add('four buttons', () =>
        <AJButtonGroup>
            <AJButton type="contained" children="Button #1" />
            <AJButton type="contained" children="Button #2" />
            <AJButton type="contained" children="Button #3" />
            <AJButton type="contained" children="Button #4" />
        </AJButtonGroup>
    )
    .add('multiple button types', () =>
        <AJButtonGroup>
            <AJButton type="outlined" children="Button #1" />
            <AJButton type="contained" children="Button #2" />
            <AJButton type="outlined" children="Button #3" />
            <AJButton type="contained" children="Button #4" />
        </AJButtonGroup>
    );