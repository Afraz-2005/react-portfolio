import React, { useEffect } from "react";
import style from "./Home.module.css";
import Navbar from "../components/Navbar";
import MailIcon from "@material-ui/icons/Mail";
import Illustration from "../images/techlife.png";
import Bot from "../images/myBot.png";
import { Link } from "react-router-dom";
import ScrollIndicator from "../components/ScrollIndicator";
// import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className={style.hero}>
      <Navbar />
      <ScrollIndicator/>
      <div className={style.banner}>
        <div className={style.child1}>
          <h2 className={style.h2}>Hi There,</h2>
          <h1 className={style.h1}>I am Afraz</h1>
          <h3 className={style.h3}>A high school student and web developer</h3>
          <br />
          <hr className={style.hr} />
          <br />
          <br />
          <p className={style.welcome}>Welcome to my portfolio!!</p>
          <br />
          <button className={style.btn}>
            <a href="https://github.com/Afraz-2005" target="_">
              Learn More
            </a>
          </button>
        </div>
        <div className={style.child2}>
          <img src={Illustration} alt="human" className={style.human} />
          <div className={style.icons}>
            <div className={style.childs}>
              <MailIcon className={style.icon} />
              <p className={style.iconText}>mahbirafraz2007@gmail.com</p>
            </div>
            <br /><br />
          </div>
        </div>
      </div>
      <div className={style.reside}>
        <div className={style.info}>
          <h1 className={style.h12}>
            Born - 2005 <br />
            Country - Bangladesh <br />
            City - Dhaka <br />
            Age - 16+ <br />
          </h1>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.aboutInfo}>
          <div className={style.firstChild}>
            <h1 style={{
              color: 'rgb(255, 65, 115)'
            }} className={style.fch1}>About me</h1>
            <br />
            <p>
              It's been a while since I started to learn programming. I have
              ideas on softwares and hardwares and can create simple GUI
              applications and a bit advanced console applications. I have
              learnt programming languages such as Java, C++, Python, Dart, C#,
              JavaScript and app frameworks like Flutter, React JS and React
              Native. I am more advanced in Web development (Frontend) and a bit
              at the backend. Recently learned Sass, Node js and React Native.
              Trying my best to achieve my goal as a software engineer.{" "}
              <br /><br />
              <hr className={style.nextHorizontal} />
            </p>
          </div><br /><br />
          <div className={style.secondChild}>
            <img
              src={Bot}
              alt="Me"
              className={style.bot}
              style={{
                backgroundColor: "black",
                borderRadius: 1000,
              }}
            />
          </div>
        </div>
      </div>
      <div className={style.footerContainer}>
        <footer className={style.footer}>
          <div>
          <div className={style.child1}>
            <p>Made by Imam Mahbir Afraz 2021 &copy; All rights researved</p>
          </div>
          </div>
          <div className={style.child2}>
            <Link to="/">Home </Link>
            <Link to="./skills">Skills </Link>
            <Link to="./skills">Project </Link>
            <Link to="./skills">Contact</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
