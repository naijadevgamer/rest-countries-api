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
    const { handleFilterRegions, filterAll } = this.props;
    // handles the filter list hidden toggle
    const handleToggleHidden = () => {
      this.setState({ hidden: !hidden });
    };

    return (
      <div className="filter">
        <div className="filter__setting">
          <div className="filter__text">Filter by Region</div>
          {hidden === false ? (
            <UpIcon className="filter__icon" onClick={handleToggleHidden} />
          ) : (
            <DownIcon className="filter__icon" onClick={handleToggleHidden} />
          )}
        </div>
        {!hidden ? (
          <div className="filter__list">
            <div
              className="filter__item"
              onClick={() => {
                filterAll();
                handleToggleHidden();
              }}
            >
              All
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Africa");
                handleToggleHidden();
              }}
            >
              Africa
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Americas");
                handleToggleHidden();
              }}
            >
              America
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Antarctic");
                handleToggleHidden();
              }}
            >
              Antarctic
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Asia");
                handleToggleHidden();
              }}
            >
              Asia
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Europe");
                handleToggleHidden();
              }}
            >
              Europe
            </div>
            <div
              className="filter__item"
              onClick={() => {
                handleFilterRegions("Oceania");
                handleToggleHidden();
              }}
            >
              Oceania
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Filter;
