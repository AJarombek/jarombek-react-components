/**
 * Component which creates a custom radio button.
 * @author Andrew Jarombek
 * @since 12/8/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AJRadioButton = ({
  id,
  name,
  value,
  label,
  defaultChecked = false,
  onChange,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.radio, 'aj-radio', className)}>
      <label>
        <div className={classes.inputWrapper}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            className={classes.input}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
          <div className={classes.customRadio} />
        </div>
        <div className={classes.customLabel}>{label}</div>
      </label>
    </div>
  );
};

AJRadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.any.isRequired,
};

export default AJRadioButton;
