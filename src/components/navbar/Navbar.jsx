import React from "react";
import "./navbar.css";
import { TbSettings, TbBell, TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
	// const [active, setActive] = useState(null);
	return (
    <div className="navbar">
      <div className="nav-start">
        <TbSettings className="nav-start-icon" />
        <TbBell className="nav-start-icon" />
      </div>
      <div className="nav-middle">
        <ul className="mid-options">
          <li className="mid-option-item active">Timeline</li>
          <li className="mid-option-item">Albums</li>
          <li className="mid-option-item">Events</li>
          <li className="mid-option-item">Favorites</li>
        </ul>
      </div>
      <div className="displayMobile">
        <div className="dropdown">
          <button className="dropbtn">
            <span>Timeline</span>
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
