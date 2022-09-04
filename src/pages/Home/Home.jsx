import React from "react";
import "./Home.css";
import Today from "../../components/today/Today";
import Week from "../../components/week/Week";
import { imagesToday, imagesWeek } from "../../utils/constants";
const Home = () => {
  return (
    <div className="home">
      <Today pics={imagesToday} />
      <Week pics={imagesWeek} />
    </div>
  );
};

export default Home;
