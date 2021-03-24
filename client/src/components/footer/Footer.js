import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import logo from "../../img/formLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons-container">
        <AiFillFacebook className="icons-container__icon" />
        <AiOutlineInstagram className="icons-container__icon" />
        <AiFillTwitterSquare className="icons-container__icon" />
      </div>
      <div className="author-container">
        <div className="authors">
          <h4>&#169; Sahbi Barkallah</h4>
          <h4>&#169; M. Ayoub Shili</h4>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="title" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
