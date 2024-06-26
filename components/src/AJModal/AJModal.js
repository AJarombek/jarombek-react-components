/**
 * Reusable modal component that can display custom content.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing a modal with an optional background.
 * @param children The contents of the modal.
 * @param onClickBackground An action that occurs when the modal is clicked.
 * @param backdrop Whether or not a background is shown behind the modal.
 * @param className Custom class attribute(s) attached to the component.
 * @return {*} React elements representing a modal.
 * @constructor
 */
const AJModal = ({ children, onClickBackground, backdrop = true, className }) => {
  const classes = useStyles();

  const eventDefault = { stopPropagation: (f) => f };

  const backdropClass = backdrop
    ? classnames(classes.ajModalBackdrop, classes.ajModalColorBackdrop, 'aj-modal-backdrop', className)
    : classnames(classes.ajModalBackdrop, 'aj-modal-backdrop', className);

  return (
    <div className={backdropClass} onClick={onClickBackground}>
      <div className={classes.ajModal} onClick={(e = eventDefault) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

AJModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClickBackground: PropTypes.func,
  backdrop: PropTypes.bool,
  className: PropTypes.string,
};

export default AJModal;
