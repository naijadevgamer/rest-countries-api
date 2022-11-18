import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/detail/detail.component";

// Had to use a functional component here because of useParams hook.
const DetailPage = () => {
  const [datas, setDatas] = useState([]);
  let { id } = useParams();

  const getDatas = async () => {
    const response = await fetch("https://restcountries.com/v3/all");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("cannot get data");
    }
    setDatas(data);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      {datas
        .filter((data) => id === data.name.common)
        .map((data, index) => (
          <Detail key={index.toString()} data={data} allDatas={datas} />
        ))}
    </>
  );
};

export default DetailPage;
