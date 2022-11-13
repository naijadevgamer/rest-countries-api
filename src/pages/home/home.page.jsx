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
    const response = await fetch(`https://restcountries.com/v3/all`);
    const data = await response.json();
    console.log(data);
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    if (data) {
      this.setState({ datas: data });
    }
  };
  componentDidMount() {
    this.getDatas();
    // .then((data) => {
    //   this.setState({ datas: data }, () => {
    //     console.log(this.state.datas);
    //   });
    // })
    // .catch((err) => {
    //   console.log("Message", err.message);
    // });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchValue !== this.state.searchValue) {
  //     this.getDatas(this.state.searchValue);
  //     // .then((data) => {
  //     //   this.setState({ datas: data }, () => {
  //     //     console.log(this.state.datas);
  //     //   });
  //     // })
  //     // .catch((err) => {
  //     //   console.log("Message", err.message);
  //     // });
  //   }
  // }

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
