import React from "react";
import dates from "../../utils/constants";
import Image from "../image/Image";
import "./today.css";

const Today = (props) => {
  return (
    <div className="today">
      <div className="title">
        <div className="todayHeading">Today</div>
        <div className="todayDate">{dates[0]}</div>
      </div>
      <div className="images">
        {props.pics.map((pic) => (
          <Image key={pic.id} img={pic} />
        ))}
      </div>
    </div>
  );
};

export default Today;
