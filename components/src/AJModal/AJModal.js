/**
 * Reusable modal content that can display custom content.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJModal = ({children, onClickBackground, backdrop=true}) => {
  const classes = useStyles();

  let backdropClass = backdrop ?
    classnames(classes.ajModalBackdrop, classes.ajModalColorBackdrop, 'aj-modal-backdrop') :
    classnames(classes.ajModalBackdrop, 'aj-modal-backdrop');

  return (
    <div className={backdropClass} onClick={onClickBackground}>
      <div className={classes.ajModal}>
        {children}
      </div>
    </div>
  );
};

AJModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClickBackground: PropTypes.func,
  backdrop: PropTypes.bool
};

export default AJModal;
