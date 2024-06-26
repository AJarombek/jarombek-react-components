/**
 * Tag component which displays a node.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJTag = ({ content, color, className }) => {
  const backgroundColor = color ?? '';
  const classes = useStyles({ backgroundColor });

  return <div className={classnames(classes.ajTag, 'aj-tag', className)}>{content}</div>;
};

AJTag.propTypes = {
  content: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default AJTag;
