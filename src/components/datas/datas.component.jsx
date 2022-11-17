import React from "react";

class Datas extends React.Component {
  render() {
    const { data } = this.props;
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies)[0];
    const nativeName = Object.values(data.name.nativeName)[0].official;
    return (
      <div className="datas">
        <div className="datas__sect1">
          <div className="datas__data-item">
            <span>Native Name:</span> {nativeName}
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
            <span>Currencies:</span> {currencies.name}
          </div>
          <div className="datas__data-item">
            <span>Languages:</span>{" "}
            {languages.length === 1 ? languages : languages.join(", ")}
          </div>
        </div>
      </div>
    );
  }
}

export default Datas;
