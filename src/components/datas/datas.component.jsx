import React from "react";

class Datas extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="datas">
        <div className="datas__sect1">
          <div className="datas__data-item">
            <span>Native Name:</span> 206,135,893
          </div>
          <div className="datas__data-item">
            <span>Population:</span> {data.population}
          </div>
          <div className="datas__data-item">
            <span>Region:</span> {data.region}
          </div>
          <div className="datas__data-item">
            <span>Sub Region:</span> {data.subregion}
          </div>
          <div className="datas__data-item">
            <span>Capital:</span> {data.capital}
          </div>
        </div>

        <div className="datas__sect2">
          <div className="datas__data-item">
            <span>Top level Domain:</span> {data.tld}
          </div>
          <div className="datas__data-item">
            <span>Currencies:</span>
          </div>
          <div className="datas__data-item">
            <span>Languages:</span> Dutch,French,German
          </div>
        </div>
      </div>
    );
  }
}

export default Datas;
