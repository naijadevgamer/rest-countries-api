import React from "react";
import { ReactComponent as UpIcon } from "../../icons/chevron-up.svg";
// import { ReactComponent as DownIcon } from "../../icons/chevron-down.svg";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <div className="filter__setting">
          <div className="filter__text">Filter by Region</div>
          <UpIcon className="filter__icon" />
        </div>
        <div className="filter__list">
          <div className="filter__item">Africa</div>
          <div className="filter__item">America</div>
          <div className="filter__item">Asia</div>
          <div className="filter__item">Europe</div>
          <div className="filter__item">Oceania</div>
        </div>
      </div>
    );
  }
}

export default Filter;
