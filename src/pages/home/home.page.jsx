import React from "react";

import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";
import CardContainer from "../../components/card-container/card-container.component";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      searchValue: "be",
    };
  }
  getDatas = async () => {
    const response = await fetch(
      `https://restcountries.com/v3/name/${this.state.searchValue}`
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    return data;
  };
  componentDidMount() {
    // console.log(this.getDatas());
    this.getDatas()
      .then((data) => {
        this.setState({ datas: data }, () => {
          console.log(this.state.datas);
        });
      })
      .catch((err) => {
        console.log("message", err.message);
      });
    // https://restcountries.com/v3/name/nigeria
  }

  render() {
    const { searchValue, datas } = this.state;
    const handleChange = (e) => {
      this.setState({ searchValue: e.target.value }, () => {
        console.log(searchValue);
      });
    };

    return (
      <div className="home">
        <div className="home__search-filter-box">
          <Search searchValue={searchValue} handleChange={handleChange} />
          <Filter />
        </div>
        <CardContainer datas={datas} />
      </div>
    );
  }
}

export default HomePage;
