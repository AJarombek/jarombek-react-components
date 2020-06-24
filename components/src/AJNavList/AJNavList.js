/**
 * Navigation list used in mobile drop-downs.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';
import {v4 as uuid} from 'uuid';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing a list commonly used by mobile dropdowns for the
 * website navigation header.
 * @param items Details about each item in the list.
 * @return {*} React elements that make up a navigation list.
 */
const AJNavList = ({items}) => {
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
          <div key={uuid()} className={listItemClasses}>
            <div onClick={() => item.onClick()}>
              <div>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

AJNavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  })).isRequired
};

export default AJNavList;
