// Router
import {  NavLink , Link } from "react-router-dom";

// Images
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

// Icons
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
        <div className="logo">
            <Link to={"/"}>
              <Logo className="logo-icon" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/all-cars">All Products</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/create-car">Add new Products</NavLink>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            <button className="logOut">
              LOG OUT
              <FaSignOutAlt />
            </button>
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOG IN</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
