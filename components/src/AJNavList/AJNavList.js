/**
 * Navigation list used in mobile drop-downs.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNavList = ({items, onClick}) => {
  const classes = useStyles();

  if (!Array.isArray(items)) {
    items = [];
  }

  return (
    <div className={classnames(classes.ajNavList, 'aj-nav-list')}>
      { items.map((item, index) => {

        let listItemClasses;
        if (index === items.length - 1) {
          listItemClasses = classnames(classes.ajNavListItem, 'aj-nav-list-item',
            classes.ajNavListLastItem, 'aj-nav-list-last-item')
        } else {
          listItemClasses = classnames(classes.ajNavListItem, 'aj-nav-list-item')
        }

        return (
          <div key={item.text} className={listItemClasses}>
            <div onClick={() => onClick()}>
              <div>{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

AJNavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })).isRequired
};

export default AJNavList;
