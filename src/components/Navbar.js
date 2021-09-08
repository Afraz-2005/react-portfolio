import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/logo.png";

class Navbar extends React.Component{

   componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
   componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      document.querySelector(".navbar").className = "navbar scroll";
    } 
    else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  render(){
    return (
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
      );
  }

}
export default Navbar;