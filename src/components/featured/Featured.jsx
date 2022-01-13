import React from "react";
import "./featured.scss";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Seires"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Finding_Forrester_logo.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          maxime, eaque error quod voluptatibus quis odit pariatur eius
          accusantium, debitis aspernatur, est adipisci dolores dolore quas
          praesentium vitae. Aliquid, quaerat.
        </span>
        <div className="buttons">
          <button className="play">
            <BsFillPlayFill />
            <span>Play</span>
          </button>
          <button className="more">
            <BsInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
