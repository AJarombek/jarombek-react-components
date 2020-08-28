/**
 * Reusable select element which has the same functionality as the HTML <select> element.
 * @author Andrew Jarombek
 * @since 8/26/2020
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJSelect = ({
  placeholder,
  options,
  defaultOption=0,
  onClickSelect=() => {},
  onClickListOption=() => {},
  disabled=false,
  className
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickSelect = () => {
    setIsOpen(!isOpen);
    onClickSelect();
  };

  const handleOnClickListOption = (option, index) => {
    setSelected(index);
    onClickListOption(option);
  };

  return (
    <div className={classnames('aj-select', classes.ajSelect, className)}>
      <div onClick={handleOnClickSelect} className={classes.ajSelectLabel}>
        <div>{!!selected && placeholder}</div>
        <div className={classnames(
          classes.ajSelectArrow, isOpen ? classes.ajSelectOpen : classes.ajSelectClosed
        )}>
          {isOpen ? '\u0042' : '\u0043'}
        </div>
      </div>
      {isOpen && (
        <ul className={classes.ajSelectList}>
          {options.map((option, index) => (
            <li key={option.value} onClick={() => handleOnClickListOption(option, index)}>
              {option.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AJSelect.propTypes = {
  placeholder: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node,
    value: PropTypes.object
  })).isRequired,
  defaultOption: PropTypes.number,
  onClickSelect: PropTypes.func,
  onClickListOption: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default AJSelect;
