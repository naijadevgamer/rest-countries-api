import React from "react";

import Header from "./components/header/header.component";
import Search from "./components/search/search.component";
import Filter from "./components/filter/filter.component";
import CardContainer from "./components/card-container/card-container.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Filter />
        <CardContainer />
      </div>
    );
  }
}

export default App;
