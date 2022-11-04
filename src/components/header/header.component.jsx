import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">Where in the world?</div>
        <div className="header__theme">
          <svg class="header__theme-icon">
            <use xlinkHref="../../icon/sprite.svg#icon-moon"></use>
          </svg>
          <span className="header__theme-text">dark mode</span>
        </div>
      </div>
    );
  }
}

export default Header;
