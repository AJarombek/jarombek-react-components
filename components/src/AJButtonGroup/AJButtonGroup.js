/**
 * Grouping of AJButton components.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import styles from "./styles";
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles(styles);

const AJButtonGroup = ({ type, children }) => {
    const classes = useStyles();

    return (
        <div className={classnames(classes.buttonGroup, classes[type])}>
            {children}
        </div>
    );
};

AJButtonGroup.propTypes = {
    type: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired
};

export default AJButtonGroup;
