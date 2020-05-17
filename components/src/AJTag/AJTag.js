/**
 * Tag component which displays a node.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJTag = ({ content, color }) => {
  const classes = useStyles({ color });

  return (
    <div className={classnames(classes.ajTag, 'aj-tag')}>
      {content}
    </div>
  );
};

AJTag.propTypes = {
  content: PropTypes.node.isRequired,
  color: PropTypes.string
};

export default AJTag;
