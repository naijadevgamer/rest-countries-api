import React from "react";

import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";
import CardContainer from "../../components/card-container/card-container.component";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      all: [],
      datas: [],
      searchValue: "",
      loading: true,
    };
  }
  getDatas = async () => {
    const response = await fetch("https://restcountries.com/v3/all");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    this.setState({ datas: data });
    this.setState({ all: data });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.getDatas();
  }

  render() {
    const { searchValue, datas, all, loading } = this.state;
    const handleChange = (e) => {
      this.setState({ searchValue: e.target.value });
    };

    const filteredDatas = datas.filter((data) =>
      data.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );

    const filterAll = () => {
      this.setState({
        datas: all,
      });
    };
    const handleFilterRegions = (e) => {
      this.setState({
        datas: all.filter((data) => data.region === e),
      });
    };

    return (
      <div className="home">
        <div className="home__search-filter-box">
          <Search searchValue={searchValue} handleChange={handleChange} />
          <Filter
            filterAll={filterAll}
            handleFilterRegions={handleFilterRegions}
          />
        </div>
        <CardContainer datas={filteredDatas} loading={loading} />
      </div>
    );
  }
}

export default HomePage;
