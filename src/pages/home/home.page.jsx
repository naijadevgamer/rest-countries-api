import React from "react";

import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";
import CardContainer from "../../components/card-container/card-container.component";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      searchValue: "",
    };
  }
  getDatas = async () => {
    const response = await fetch("https://restcountries.com/v3/all");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    console.log(data);
    this.setState({ datas: data });
  };

  componentDidMount() {
    this.getDatas();
    console.log("mounted");
  }

  render() {
    const { searchValue, datas } = this.state;
    const handleChange = (e) => {
      this.setState({ searchValue: e.target.value }, () => {
        console.log(searchValue);
      });
    };

    const filteredDatas = datas.filter((data) =>
      data.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div className="home">
        <div className="home__search-filter-box">
          <Search searchValue={searchValue} handleChange={handleChange} />
          <Filter />
        </div>
        <CardContainer datas={filteredDatas} />
      </div>
    );
  }
}

export default HomePage;
