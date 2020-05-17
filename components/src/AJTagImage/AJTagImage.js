/**
 * Component which displays a node along with an image.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJTagImage = ({ content, picture, color }) => {
  const backgroundColor = color ?? 'rgba(204, 204, 204, 0.6)';
  const classes = useStyles({ backgroundColor });

  return (
    <div className={classnames(classes.ajTagImage, 'aj-tag-image')}>
      <img className={classes.picture} src={picture} alt=""/>
      <div className={classes.content}>
        {content}
      </div>
    </div>
  );
};

AJTagImage.propTypes = {
  content: PropTypes.node.isRequired,
  picture: PropTypes.any,
  color: PropTypes.string
};

export default AJTagImage;
