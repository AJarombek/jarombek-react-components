/**
 * Reusable mobile hamburger component.  Used for mobile headers on websites.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, {useState} from 'react';

const AJMobileHamburger = (onClick=() => {}) => {
  const [active, setActive] = useState(true);

  const onClickAction = () => {
    setActive(!active);
    onClick();
  };

  return (
    <div className="aj-mobile-hamburger" onClick={onClickAction}>
      <button>
        <span className={active ? "aj-mobile-hamburger-active": "aj-mobile-hamburger-inactive"} />
      </button>
    </div>
  );
};

AJMobileHamburger.propTypes = {
  onClick: PropTypes.func
};

export default AJMobileHamburger;
