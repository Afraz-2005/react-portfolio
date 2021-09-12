import style from "./skills.module.css";
import Navbar from "../components/Navbar";
import Illustration from "../images/skill.png";
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
// import Electron from "../images/electron.png";

import Vscode from "../images/vscode.png";
import Intellij from "../images/intellij.png";
import Android from "../images/android.png";
import Vst from "../images/vst.png";
import Pycharm from "../images/pycharm.png";

import Ps from "../images/ps.png";
import Ai from "../images/ai.ico";
import Xd from "../images/xd.png";
import Filmora from "../images/filmora.png";
import Figma from "../images/figma.png";
import Pr from "../images/pr.png";
import Lrc from "../images/lrc.png"

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
            </div>
          </div>
          <div className={style.h12}>
            <h1>Graphics and UI designing</h1>
            <div className={style.row}>
              <div className={style.column1}>
                <div className={style.ps}>
                  <img src={Ps} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.ai}>
                  <img src={Ai} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.xd}>
                  <img src={Xd} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.fl}>
                  <img src={Filmora} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.pr}>
                  <img src={Pr} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.figma}>
                  <img src={Figma} alt="C++" className={style.logos} />
                </div>
              </div>
              <div className={style.column1}>
                <div className={style.lrc}>
                  <img src={Lrc} alt="C++" className={style.logos} />
                </div>
              </div>
            </div>
            <br /><br />
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
              Tools I use for productivity
            </h1>
            <br />
            <p className={style.tools}>
              <div className={style.column2}>
                <img src={Vscode} alt="" className={style.logo2} />
              </div>
              <div className={style.column2}>
                <img src={Intellij} alt="" className={style.logo2} />
              </div>
              <div className={style.column2}>
                <img src={Pycharm} alt="" className={style.logo2} />
              </div>
              <div className={style.column2}>
                <img src={Android} alt="" className={style.logo2} />
              </div>
              <div className={style.column2}>
                <img src={Vst} alt="" className={style.logo2} />
              </div>
              <br />
            </p>
            <br />
            <br />
          </div>
          <br />
          <br />
          <hr className={style.nextHorizontal} />
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
