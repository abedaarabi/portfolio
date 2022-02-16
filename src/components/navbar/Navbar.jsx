import "./navbar.scss";
import React from "react";
import {
  Person,
  Mail,
  CloudDownloadOutlined,
  GitHub,
  LinkedIn,
} from "@material-ui/icons";
export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`navbar  ${menuOpen && `active`}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            |عبدو|
          </a>
          <div className="itemContainer">
            <Person className="icon" /> <span>+45 7156 6389 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" /> <span>abedaarabi@gmail.com</span>
          </div>
          <div className="itemContainer">
            <span>
              <a href="https://github.com/abedaarabi  ">
                <GitHub className="icon" />
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <span>
              <a href="https://www.linkedin.com/in/abdulrahman-aarabi-abed-543422140/">
                <LinkedIn className="icon" />
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <span>
              <a
                href="https://drive.google.com/uc?id=1-YcRD3uHw-KOZBHPRLh5CqQvnTpbACBl"
                target="blank"
              >
                <CloudDownloadOutlined className="icon" /> Resume
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
