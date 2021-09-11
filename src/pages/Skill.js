// import React, { Component } from "react";
// import style from "./Home.module.css";
import style from "./skills.module.css";
import Navbar from "../components/Navbar";
// import MailIcon from "@material-ui/icons/Mail";
import Illustration from "../images/skill.png";
import Bot from "../images/myBot.png";
import { Link } from "react-router-dom";
import Cpp from "../images/c++.png";
import Csharp from "../images/Csharp.png";
import Java from "../images/java.png";
import Python from "../images/python.png";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Js from "../images/js.png";
import Bs from "../images/bootstrap.png";
import Reactjs from "../images/reactjs.png";
// import Reactnative from "../images/reactnative.png";
import Electron from "../images/electron.png";

export default function Skill() {
  return (
    <div className={style.hero}>
      <Navbar />
      <div className={style.banner}>
        <div className={style.child1}>
          <h2 className={style.h2}>Hey!</h2>
          <h1 className={style.h1}>Take a look at my skills</h1>
          {/* <h3 className={style.h3}>
              A high school student and web developer
            </h3> */}
          <br />
          <hr className={style.hr} />
          <br />
          <br />
          {/* <p className={style.welcome}>Welcome to my portfolio!!</p> */}
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
              {/* <MailIcon className={style.icon} /> */}
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={style.reside}>
        <div className={style.info}>
          <div className={style.h12}>
            <h1>Programming</h1>
            <div className={style.row}>
              <div className={style.column1}>
                <div className={style.cpp}>
                  <img src={Cpp} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.cs}>
                  <img src={Csharp} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.java}>
                  <img src={Java} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.py}>
                  <img src={Python} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.html}>
                  <img src={Html} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.css}>
                  <img src={Css} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.js}>
                  <img src={Js} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.bs}>
                  <img src={Bs} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.rjs}>
                  <img src={Reactjs} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.electron}>
                  <img src={Electron} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.rn}>
                  <img src={Reactjs} alt="C++" className={style.logos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.aboutInfo}>
          <div className={style.firstChild}>
            <h1
              style={{
                color: "rgb(255, 65, 115)",
              }}
            >
              About me
            </h1>
            <br />
            <p>
              It's been a while since I started to learn programming. I have
              ideas on softwares and hardwares and can create simple GUI
              applications and a bit advanced console applications. I have
              learnt programming languages such as Java, C++, Python, Dart, C#,
              JavaScript and app frameworks like Flutter, React JS and React
              Native. I am more advanced in Web development (Frontend) and a bit
              at the backend. Recently learned Sass, Node js and React Native.
              Trying my best to achieve my goal as a software engineer. <br />
              <br />
              <hr className={style.nextHorizontal} />
            </p>
          </div>
          <br />
          <br />
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
