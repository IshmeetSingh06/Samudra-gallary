import React from "react";
import "./navbar.css";
import { TbSettings, TbBell, TbCirclePlus } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleActive = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
	return (
    <div className="navbar">
      <div className="nav-start">
        <TbSettings className="nav-start-icon" />
        <TbBell className="nav-start-icon" />
      </div>
      <div className="nav-middle">
        <ul className="mid-options">
          <li className="mid-option-item active" onClick={handleActive}>
						Timeline
					</li>
					<li className="mid-option-item" onClick={handleActive}>
						Albums
					</li>
					<li className="mid-option-item" onClick={handleActive}>
						Events
					</li>
					<li className="mid-option-item" onClick={handleActive}>
						Favorites
					</li>
        </ul>
      </div>
      <div className="displayMobile">
        <div className="dropdown">
          <button className="dropbtn">
            <span>Timeline</span>
            <MdOutlineKeyboardArrowDown className="nav-icon" />
          </button>
          <div className="dropdown-content">
            <Link to="/">Timeline</Link>
            <Link to="/">Albums</Link>
            <Link to="/">Events</Link>
            <Link to="/">Favorites</Link>
          </div>
        </div>
      </div>
      <div className="nav-end">
        <TbCirclePlus className="nav-end-icon" /> <span>Upload Photos</span>
      </div>
    </div>
  );
};

export default Navbar;
