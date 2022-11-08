import React from "react";

import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";
import CardContainer from "../../components/card-container/card-container.component";
class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__search-filter-box">
          <Search />
          <Filter />
        </div>
        <CardContainer />
      </div>
    );
  }
}

export default HomePage;
