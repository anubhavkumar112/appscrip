import headlinelogo from "../../images/nav-top-logo.png";

import logo from "../../images/Logo.png";
import search from "../../images/search-normal.png";
import bag from "../../images/shopping-bag.png";
import profile from "../../images/profile.png";
import Language from "../../images/Language.png";
import heart from "../../images/heart.png";
import menu from "../../images/solar_hamburger-menu-linear.png";
import "./AppHeader.css";
import { useState } from "react";
const AppHeader = () => {
  const [menuclass, setMenu] = useState("toggleSidebar");

  const handlemenu = () => {
    setMenu("zindex3");
  };
  const handlemenuclose = () => {
    setMenu("toggleSidebar");
  };
  return (
    <nav>
      <section className="top top-nav">
        <span className="headline nav-section ">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem ipsum dolor</span>
        </span>
        <span className="headline  nav-section  middle-section">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor </span>
        </span>
        <span className="headline  nav-section  ">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor</span>
        </span>
      </section>
      <section className="bottom-nav">
        <div className="bottom-nav-utility">
          <span className="logo">
            <img className="menu" src={menu} alt="menu" onClick={handlemenu} />
            <img src={logo} alt="logo" />
          </span>
          <aside className={menuclass}>
            <div className="sibebarlogo">
              <span>LOGO</span>
              <span onClick={handlemenuclose}>X</span>
            </div>
            <div className="signup">Sign Up</div>
            <div className="signin">Sign in</div>
            <div className="abt">About</div>
            <div className="skills">Skills</div>
            <div className="stories">Stories</div>
            <div className="contactus">Contact Us</div>
          </aside>
          <span className="nav-utilities">
            <img className="img search" src={search} alt="search" />
            <img className="img like" src={heart} alt="like" />
            <img className="img bag" src={bag} alt="bag" />
            <img className="img profile" src={profile} alt="profile" />
            <img className="img lang" src={Language} alt="lang" />
          </span>
        </div>
        <span className="website-name">LOGO</span>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default AppHeader;
