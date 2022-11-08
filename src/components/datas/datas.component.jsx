import React from "react";

class Datas extends React.Component {
  render() {
    return (
      <div className="datas">
        <div className="datas__sect1">
          <div className="datas__data-item">
            <span>Native Name:</span> 206,135,893
          </div>
          <div className="datas__data-item">
            <span>Population:</span> 11,319,511
          </div>
          <div className="datas__data-item">
            <span>Region:</span> Europe
          </div>
          <div className="datas__data-item">
            <span>Sub Region:</span> Western Europe
          </div>
          <div className="datas__data-item">
            <span>Capital:</span> Brussels
          </div>
        </div>

        <div className="datas__sect2">
          <div className="datas__data-item">
            <span>Top level Domain:</span> .be
          </div>
          <div className="datas__data-item">
            <span>Currencies:</span> 11,319,511
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
