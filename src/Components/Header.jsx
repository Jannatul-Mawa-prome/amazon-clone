import React, { useContext } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import Logo from "../Logo.png";
import { useStateValue } from "./../StateProvider";
import Auth from "./Auth";

const Header = () => {
  const auth = Auth();
  const [{ cart }, dispatch] = useStateValue();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(auth.users);
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_input" />
        <i className="fas fa-search search_icon"></i>
      </div>
      <nav className="navber">
        <NavLink to="/login">
          <div className="header_nav">
            {loggedInUser.email ? (
              <span
                className="nav_title mt-1"
                style={{
                  fontSize: "16px",
                  color: "#a88734",
                  fontWeight: "bold",
                }}
              >
                {auth.users.displayName}
              </span>
            ) : (
              <span className="nav_link">Sign in</span>
            )}
          </div>
        </NavLink>
        <Link to="/">
          <div className="header_nav">
            <span className="nav_title">Returns</span>
            <span className="nav_link">& Others</span>
          </div>
        </Link>
        <NavLink to="/">
          <div className="header_nav">
            <span className="nav_title">Your</span>
            <span className="nav_link">Prime</span>
          </div>
        </NavLink>
        <NavLink to="/checkout">
          <div className=" header_cart">
            <i class="fas fa-shopping-cart cart_icon"></i>
            <sup className="nav_link">{cart.length}</sup>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
