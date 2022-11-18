import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { data, link } = this.props;
    return (
      <Link to={`/detail/${link}`} className="card">
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
            <span>Capital:</span>{" "}
            {data.capital !== undefined ? data.capital : "Nil"}
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
