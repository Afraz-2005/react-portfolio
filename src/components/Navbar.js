import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ContactsIcon from "@material-ui/icons/Contacts";

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  render() {
    return (
      <div className="main">
        <div className="navbar">
          <img src={Logo} alt="logo" className="logo" />
          <ul>
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./skills">Skills</Link>
            </li>
            <li>
              <Link to="./skills">Projects</Link>
            </li>
            <li>
              <Link to="./skills">Contact</Link>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="smallnav">
            <ul>
              <li>
                <Link to="./">
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <Link to="./skills">
                  <SettingsIcon />
                </Link>
              </li>
              <li>
                <Link to="./skills">
                  <FormatListBulletedIcon />
                </Link>
              </li>
              <li>
                <Link to="./skills">
                  <ContactsIcon />
                </Link>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}
export default Navbar;
