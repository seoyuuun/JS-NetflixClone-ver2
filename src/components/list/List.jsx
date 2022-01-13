import React from "react";
import "./list.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <IoIosArrowBack />
        <div className="container"></div>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default List;
