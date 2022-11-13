import React from "react";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <img className="card__img" src={data.flags[1]} alt="Flag" />
        <div className="card__details">
          <div className="card__name">{data.name.common}</div>
          <div className="card__data">
            <span>Population:</span> {data.population}
          </div>
          <div className="card__data">
            <span>Region:</span> {data.region}
          </div>
          <div className="card__data">
            <span>Capital:</span> {data.capital}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
