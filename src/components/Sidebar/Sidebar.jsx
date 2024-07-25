import React from "react";
import pic from "../../assets/sidebarprofile.jpg";
// import pic from "../../assets/pic.jpeg";

import "./Sidebar.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation()

  return (
    <div className="main_sidebar">
      <div className="sidebar_top">
        <div className="profile_pic">
          <img src={pic} alt="Image Error" style={{}} />
        </div>
        <div className="name">
          <h3>
            <span>
              Arslan Ghaffar<span className="back">Arslan Ghaffar</span>
            </span>
          </h3>
        </div>
      </div>

      <div className="sidebar_centre">
        <Link to='/' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/" ? "menu_active" : "menu"}  >Home</div>
        </Link>
        <Link to='/about' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/about" ? "menu_active" : "menu"} >About</div>
        </Link>
        <Link to='/service' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/service" ? "menu_active" : "menu"} >Services</div>
        </Link>
        <Link to='/portfolio' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/portfolio" ? "menu_active" : "menu"} >Portfolio</div>
        </Link>
        <Link to='/blogs' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/blogs" ? "menu_active" : "menu"} >Blog</div>
        </Link>
        <Link to='/contactus' style={{ textDecoration: "none", color: "unset" }} >
          <div className={location.pathname === "/contactus" ? "menu_active" : "menu"} >Contact</div>
        </Link>
      </div>

      <div className="sidebar_bottom">
        <div className="social_icon">
          <div className="icon_back">
            <a
              style={{ textDecoration: "none" }}
              href="https://web.facebook.com/arslan.ghaffar.750"
            >
            <BiLogoFacebook className="icons" />

            </a>
          </div>
          <div className="icon_back">
            <a style={{ textDecoration: "none" }} href="https://www.instagram.com/_arslan_ghaffar?igsh=MXZ4aHB5ejVibXU1Yg==">

              <FaInstagram className="icons" />
            </a>
          </div>
          <div className="icon_back">
            <a style={{ textDecoration: "none" }}
              href="https://twitter.com/_arslan_12"
            >
              <FaTwitter className="icons" />

            </a>
          </div>
          <div className="icon_back">
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/arslan-ghaffar-993b74178/"
            >

              <FaLinkedinIn className="icons" />

            </a>
          </div>
          <div className="icon_back">
            <a
              style={{ textDecoration: "none" }}

              href="https://github.com/arslanghaffar12"
            >
            <FaGithub className="icons" />

            </a>
          </div>
        </div>
        <p>Copyright © 2024 Asrlan Ghaffar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
