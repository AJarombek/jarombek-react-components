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

/**
 * Component resembling the HTML <select> element.
 * @param placeholder Value shown on the label when no options are selected.
 * @param options The options displayed in the dropdown.
 * @param defaultOption The option selected by default.
 * @param onClickSelect Actions to take when the label is clicked.
 * @param onClickListOption Actions to take when one of the options in the dropdown is selected.
 * @param disabled Whether or not the select element is clickable.
 * @param className Custom class for the component.
 * @return {*} The React component.
 */
const AJSelect = ({
  placeholder,
  options,
  defaultOption,
  onClickSelect=() => {},
  onClickListOption=() => {},
  disabled=false,
  className
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const disabledClassNames = disabled ?
    classnames('aj-select-disabled', classes.ajSelectDisabled) : null;

  const handleOnClickSelect = () => {
    if (!disabled) {
      onClickSelect(!isOpen);
      setIsOpen(!isOpen);
    }
  };

  const handleOnClickListOption = (option, index) => {
    if (!disabled) {
      setSelected(index + 1);
      setIsOpen(false);
      onClickListOption(option);
    }
  };

  return (
    <div className={classnames('aj-select', classes.ajSelect, className)}>
      <div
        onClick={handleOnClickSelect}
        className={classnames(classes.ajSelectLabel, disabledClassNames)}
      >
        <div>{selected ? options[selected - 1].content : placeholder}</div>
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
