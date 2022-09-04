import React, { useState } from "react";
import "./pagehero.css";
import { TbSearch } from "react-icons/tb";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Pagehero = () => {
  //eslint-disable-next-line
  const [scroll, setScroll] = useState(0);

  const navigate = useNavigate();
  const handleClick = (e) => {
    document.querySelector(".activeMenu").classList.remove("activeMenu");
    e.target.classList.add("activeMenu");
    navigate("/architecture");
  };

  const handle1 = (e) => {
    document.querySelector(".activeMenu").classList.remove("activeMenu");
    e.target.classList.add("activeMenu");
    navigate("/");
  };
  const moveRight = () => {
    const el = document.getElementById(`hscroll`);
    setScroll((el.scrollLeft += 20));
  };

  const moveLeft = () => {
    const el = document.getElementById(`hscroll`);
    setScroll((el.scrollLeft -= 20));
  };
  return (
    <div className="pagehero">
      <div className="header">
        <div className="head-start">Library</div>
        <div className="head-end">
          <div>Search All Photos</div>
          <TbSearch className="head-icon" />
        </div>
      </div>
      <div className="menu">
        <IoIosArrowDropleft className="menuIcon" onClick={moveLeft} />
        <div className="menu-start" id={`hscroll`}>
          <div className="menu-options">
            <div className="menu-option-item activeMenu">
              <span onClick={handle1}>All Photos</span>
            </div>
            <div className="menu-option-item" onClick={handleClick}>
              💰 Architecture
            </div>
            <div className="menu-option-item">🏔 Kashmir</div>
            <div className="menu-option-item">⛵️ Seaside</div>
            <div className="menu-option-item">🐟 Lake view</div>
            <div className="menu-option-item">🇨🇳 China</div>
            <div className="menu-option-item">🇮🇹 Italy</div>
            <div className="menu-option-item">🇦🇷 Argentina</div>
          </div>
        </div>
        <IoIosArrowDropright className="menuIcon" onClick={moveRight} />
        <div className="menu-end">+New Category</div>
      </div>
    </div>
  );
};

export default Pagehero;
