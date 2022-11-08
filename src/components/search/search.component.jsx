import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search__icon-box">
          <SearchIcon className="search__icon" />
        </div>

        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Search for a country..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
