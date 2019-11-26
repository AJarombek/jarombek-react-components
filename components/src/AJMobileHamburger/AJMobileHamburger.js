/**
 * Reusable mobile hamburger component.  Used for mobile headers on websites.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * Component representing a hamburger icon which animates to an 'X' icon when clicked.  Commonly
 * used with mobile menu dropdowns.
 * @param onClick Additional behavior that occurs when the component is clicked.
 * @return {*} React elements that represent a hamburger icon.
 */
const AJMobileHamburger = ({onClick}) => {
  const [active, setActive] = useState(false);

  const onClickAction = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="aj-mobile-hamburger" onClick={onClickAction}>
      <button type="button">
        <span className={active ? "aj-mobile-hamburger-active": "aj-mobile-hamburger-inactive"} />
      </button>
    </div>
  );
};

AJMobileHamburger.propTypes = {
  onClick: PropTypes.func
};

export default AJMobileHamburger;
