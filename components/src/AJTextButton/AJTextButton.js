/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const AJTextButton = ({content, onClick=() => {}, disabled=false}) => {
  return (
    <div className="aj-text-button">
      <button disabled={disabled} onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

AJTextButton.propTypes = {
  content: PropTypes.node.required,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AJTextButton;
