import React from "react";
import Card from "../card/card.component";

class CardContainer extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardContainer;
