import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../icons/arrow-left2.svg";
import Datas from "../datas/datas.component";
import Button from "../button/button.component";

class Detail extends React.Component {
  render() {
    const { data, allDatas } = this.props;
    console.log(allDatas);

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
              {data.borders !== undefined
                ? data.borders.map((border) =>
                    allDatas
                      .filter((data) => border === data.cca3)
                      .map((data) => (
                        <Link
                          to={`/detail/${data.name.common}`}
                          className="detail__button-link"
                        >
                          {" "}
                          <Button>{data.name.common}</Button>
                        </Link>
                      ))
                  )
                : "Nil"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
