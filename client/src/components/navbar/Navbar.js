import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [stillOnTop, setStillOnTop] = useState(true);
  let width = window.innerWidth;
  let offset = width > 800 ? 100 : 300;
  //scroll tracker
  window.addEventListener("scroll", () => {
    if (window.scrollY < offset) {
      setStillOnTop(false);
    } else {
      setStillOnTop(true);
    }
  });
  //links
  const links = ["book list", "contact us", "about"];
  const user = useSelector((state) => state.userReducer);

  return (
    <Fragment>
      <div className="navbar-container"></div>
      <nav className={`navbar ${stillOnTop ? "visible" : ""} `}>
        <Link
          to="/"
          className={`navbar-title ${stillOnTop ? "color_change" : ""} `}
        >
          <h1>Solo lib</h1>
        </Link>
        <ul className="navbar-list">
          {links.map((link) => (
            <li key={link} className="navbar-list__item">
              <Link
                to={`/${link.replaceAll(" ", "")}`}
                className={`${stillOnTop ? "color_change" : ""}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="navbar-auth">
          {user.email !== "" && user.password !== "" ? (
            <Link to="/profile">
              <Button className="button">Account</Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button className="button">Join</Button>
            </Link>
          )}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
