/**
 * Reusable mobile hamburger component.  Used for mobile headers on websites.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, {useState, forwardRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {createUseStyles} from 'react-jss';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing a hamburger icon which animates to an 'X' icon when clicked.  Commonly
 * used with mobile menu dropdowns.
 * @param onClick Additional behavior that occurs when the component is clicked.
 * @param ref A ref forwarded through the component to the <div> DOM element.
 * @return {*} React elements that represent a hamburger icon.
 */
const AJMobileHamburger = forwardRef(({onClick}, ref) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const spanClassName = active ?
    classnames('aj-mobile-hamburger-active', classes.ajMobileHamburgerActive):
    classnames('aj-mobile-hamburger-inactive', classes.ajMobileHamburgerInactive);

  const hamburgerClasses = classnames('aj-mobile-hamburger', classes.ajMobileHamburger);

  const onClickAction = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={hamburgerClasses} onClick={onClickAction} ref={ref}>
      <button type="button">
        <span className={spanClassName} />
      </button>
    </div>
  );
});

AJMobileHamburger.propTypes = {
  onClick: PropTypes.func
};

export default AJMobileHamburger;
