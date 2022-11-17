import { useState } from "react";
import "../Styles/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="mainHeader">
        <h1 className="headerTitle">Magnum Tokens</h1>

        <div className={showMenu ? "headerLinks show" : "headerLinks"}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                // activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li>
              <NavLink to="/buynow">Buy now</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <i
          className="fa-solid fa-bars icon"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </div>
    </>
  );
};

export default Header;
