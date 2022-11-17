import React from "react";
import { ReactComponent as UpIcon } from "../../icons/chevron-up.svg";
import { ReactComponent as DownIcon } from "../../icons/chevron-down.svg";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }
  render() {
    const { hidden } = this.state;
    // handles the filter list hidden toggle
    const handleToggleHidden = () => {
      this.setState({ hidden: !hidden });
    };
    return (
      <div className="filter">
        <div className="filter__setting">
          <div className="filter__text">Filter by Region</div>
          {hidden ? (
            <UpIcon className="filter__icon" onClick={handleToggleHidden} />
          ) : (
            <DownIcon className="filter__icon" onClick={handleToggleHidden} />
          )}
        </div>
        {!hidden ? (
          <div className="filter__list">
            <div className="filter__item">All</div>
            <div className="filter__item">Africa</div>
            <div className="filter__item">America</div>
            <div className="filter__item">Asia</div>
            <div className="filter__item">Europe</div>
            <div className="filter__item">Oceania</div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Filter;
