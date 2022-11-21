import React from "react";

class Datas extends React.Component {
  render() {
    const { data } = this.props;

    // converts languages value to array
    const languages =
      data.languages !== undefined ? Object.values(data.languages) : "";

    // converts currencies value to array
    const currencies =
      data.currencies !== undefined ? Object.values(data.currencies)[0] : "";

    // converts native name value to array
    const nativeName =
      data.name.nativeName !== undefined
        ? Object.values(data.name.nativeName)[0].official
        : "Nil";

    return (
      <div className="datas">
        <div className="datas__sect1">
          <div className="datas__data-item">
            <span>Native Name:</span> {nativeName}
          </div>
          <div className="datas__data-item">
            <span>Population:</span>{" "}
            {data.population !== undefined
              ? data.population.toLocaleString()
              : "Nil"}
          </div>
          <div className="datas__data-item">
            <span>Region:</span>{" "}
            {data.region !== undefined ? data.region : "Nil"}
          </div>
          <div className="datas__data-item">
            <span>Sub Region:</span>{" "}
            {data.subregion !== undefined ? data.subregion : "Nil"}
          </div>
          <div className="datas__data-item">
            <span>Capital:</span>{" "}
            {data.capital !== undefined ? data.capital : "Nil"}
          </div>
        </div>

        <div className="datas__sect2">
          <div className="datas__data-item">
            <span>Top level Domain:</span>{" "}
            {data.tld !== undefined ? data.tld : "Nil"}
          </div>
          <div className="datas__data-item">
            <span>Currencies:</span>{" "}
            {currencies.name !== undefined ? currencies.name : "Nil"}
          </div>
          <div className="datas__data-item">
            <span>Languages:</span>{" "}
            {languages
              ? languages.length === 1
                ? languages
                : languages.join(", ")
              : "nil"}
          </div>
        </div>
      </div>
    );
  }
}

export default Datas;
