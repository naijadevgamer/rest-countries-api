import React from "react";

class Parameters extends React.Component {
  render() {
    return (
      <div className="detail__sections">
        <div className="detail__info-sect1">
          <div className="card__props">
            <span>Native Name:</span> 206,135,893
          </div>
          <div className="card__props">
            <span>Population:</span> 11,319,511
          </div>
          <div className="card__props">
            <span>Region:</span> Europe
          </div>
          <div className="card__props">
            <span>Sub Region:</span> Western Europe
          </div>
          <div className="card__props">
            <span>Capital:</span> Brussels
          </div>
        </div>
        <div className="detail__info-sect2">
          <div className="card__props">
            <span>Top level Domain:</span> .be
          </div>
          <div className="card__props">
            <span>Currencies:</span> 11,319,511
          </div>
          <div className="card__props">
            <span>Languages:</span> Dutch,French,German
          </div>
        </div>
      </div>
    );
  }
}

export default Parameters;
