import React from "react";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <div className="card__img"></div>
        <div className="card__details">
          <div className="card__name">{data.name.common}</div>
          <div className="card__data">
            <span>Population:</span> {data.population}
          </div>
          <div className="card__data">
            <span>Region:</span> {data.region}
          </div>
          <div className="card__data">
            <span>Capital:</span> {data.capital[0]}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
