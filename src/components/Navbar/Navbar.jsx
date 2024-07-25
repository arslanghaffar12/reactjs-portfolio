import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Drawer } from "antd";
import pic from "../../assets/pic.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation()


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="main_navber">

      <Link to='/' style={{ textDecoration: "none", color: "unset" }} >
        <div className="logo">Shahzaib.</div>
      </Link>
      <div className="icon" onClick={showDrawer}>
        <FiMenu size={24} />
      </div>
      <Drawer onClose={onClose} open={open}>
        <div className="main_sidenavbar">
          <div className="sidebar_top">
            <div className="profile_pic">
              <img src={pic} alt="Image Error" />
            </div>
            <div className="name">
              <h3>
                <span>
                  Shahzaib Ali<span className="back">Shahzaib Ali</span>
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
                <BiLogoFacebook className="icons" />
              </div>
              <div className="icon_back">
                <FaInstagram className="icons" />
              </div>
              <div className="icon_back">
                <FaTwitter className="icons" />
              </div>
              <div className="icon_back">
                <FaLinkedinIn className="icons" />
              </div>
              <div className="icon_back">
                <FaGithub className="icons" />
              </div>
            </div>
            <p>Copyright © 2024 Arslan Ghaffar. All rights reserved.</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
