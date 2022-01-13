import React from "react";
import "./list.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ListItem from "./ListItem";

const List = () => {
  const hadleClick = (direction) => {};

  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <IoIosArrowBack
          className="slider_arrow left"
          onClick={() => hadleClick(left)}
        />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <IoIosArrowForward
          className="slider_arrow right"
          onClick={() => hadleClick(right)}
        />
      </div>
    </div>
  );
};

export default List;
