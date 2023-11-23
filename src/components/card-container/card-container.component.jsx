import React from "react";
import Card from "../card/card.component";
import Loader from "../loader/loader";

class CardContainer extends React.Component {
  render() {
    const { datas, loading } = this.props;
    return (
      <div className="card-container">
        {loading ? (
          <Loader />
        ) : (
          datas.map((data, index) => (
            <Card key={index.toString()} data={data} link={data.name.common} />
          ))
        )}
      </div>
    );
  }
}

export default CardContainer;
