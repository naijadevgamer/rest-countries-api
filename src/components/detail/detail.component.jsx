import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../icons/arrow-left2.svg";
import Datas from "../datas/datas.component";
import Button from "../button/button.component";

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <Link to="/" className="detail__button-link">
          <Button>
            <ArrowLeft className="detail__back-icon" />
            <span>Back</span>
          </Button>
        </Link>

        <div className="detail__info">
          <div className="detail__flag-img"></div>
          <div className="detail__info-datas">
            <div className="detail__name">Belgium</div>
            <Datas />
            <div className="detail__border">
              <span>Border Countries: </span>
              <div className="detail__border-items">
                <Button>France</Button>
                <Button>France</Button>
                <Button>France</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
