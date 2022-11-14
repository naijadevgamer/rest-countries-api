import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/detail/detail.component";

const DetailPage = () => {
  const [datas, setDatas] = useState([]);
  let { id } = useParams();

  const getDatas = async () => {
    const response = await fetch("https://restcountries.com/v3/all");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    console.log(data);
    setDatas(data);
  };

  useEffect(() => {
    getDatas();
    console.log("mount");
    console.log(id);
  }, []);

  return (
    <>
      {datas
        .filter((data, index) => Number(id) === index)
        .map((data, index) => (
          <Detail key={index.toString()} data={data} />
        ))}
      {/* <Detail /> */}
    </>
  );
};

// class DetailPage extends React.Component {
//   render() {

//   }
// }

export default DetailPage;
