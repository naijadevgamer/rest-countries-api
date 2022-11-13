import React from "react";
import Card from "../card/card.component";

class CardContainer extends React.Component {
  render() {
    const { datas } = this.props;
    return (
      <div className="card-container">
        {datas.map((data, index) => (
          <Card key={index.toString()} data={data} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
