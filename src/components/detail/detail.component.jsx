import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../icons/arrow-left2.svg";
import Datas from "../datas/datas.component";
import Button from "../button/button.component";

class Detail extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="detail">
        <Link to="/" className="detail__button-link">
          <Button>
            <ArrowLeft className="detail__back-icon" />
            <span>Back</span>
          </Button>
        </Link>

        <div className="detail__info">
          <img src={data.flags[1]} alt="flag" className="detail__flag-img" />
          <div className="detail__info-datas">
            <div className="detail__name">{data.name.common}</div>
            <Datas data={data} />
            <div className="detail__border">
              <span>Border Countries:</span>
              <Button>France</Button>
              <Button>Germany</Button>
              <Button>Netherlands</Button>
              <Button>Germany</Button>
              <Button>Germany</Button>
              <Button>Germany</Button>
              <Button>Germany</Button>
              <Button>Germany</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
