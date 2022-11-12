import React from "react";
import Card from "../card/card.component";

class CardContainer extends React.Component {
  render() {
    const { datas } = this.props;
    return (
      <div className="card-container">
        {datas.map((data) => {
          return <Card data={data} />;
        })}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    );
  }
}

export default CardContainer;
