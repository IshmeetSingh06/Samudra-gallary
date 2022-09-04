import React from "react";
import dates from "../../utils/constants";
import Image from "../image/Image";
import "./week.css";

const Week = (props) => {
	return (
    <div className="week">
      <div className="title">
        <div className="weekHeading">This Week</div>
        <div className="weekDate">{dates[1]}</div>
      </div>
      <div className="images">
        {props.pics.map((pic) => (
          <Image key={pic.id} img={pic} />
        ))}
      </div>
    </div>
  );
};

export default Week;
