import React from "react";
import { ReactComponent as ArrowLeft } from "../../icons/arrow-left2.svg";
import Parameters from "../parameters/parameters.component";

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <button className="detail__button detail__button--back">
          <ArrowLeft className="detail__back-icon" />
        </button>
        <div className="detail__all-info">
          <div className="detail__flag-img"></div>
          <div className="detail__info-text">
            <div className="detail__name">Belgium</div>
            <Parameters />
            <div className="detail__border">
              <span>Border Countries:</span>
              <button className="detail__button detail__button--border">
                france
              </button>
              <button className="detail__button detail__button--border">
                Germany
              </button>
              <button className="detail__button detail__button--border">
                Germany
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
