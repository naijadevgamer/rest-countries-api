import React from "react";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo">Where in the world?</div>
          <div className="header__theme">
            <MoonIcon className="header__theme-icon" />
            <span className="header__theme-text">Dark mode</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
