import style from "./skills.module.css";
import Navbar from "../components/Navbar";
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
import Reactnative from "../images/rn.png";
// import Electron from "../images/electron.png";
import Particles from "react-particles-js";

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
import Lrc from "../images/lrc.png";
import React, { useEffect } from "react";

import ScrollIndicator from "../components/ScrollIndicator";

export default function Skill() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.hero}>
      <Navbar />
      <ScrollIndicator />
      <div className={style.banner}>
      <Particles className={style.particles}
              params={{
                "particles": {
                  "number": {
                    "value":30,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": ["#3498db","#9b59b6"]
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#b6b2b2"
                    }
                  },
                  "opacity": {
                    "value": 0.5211089197812949,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 8.017060304327615,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 12.181158184520175,
                      "size_min": 0.1,
                      "sync": true
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#c8c8c8",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            />
        <div className={style.child1}>
          <h2 className={style.h2}>Hey!</h2>
          <h1 className={style.h1}>Take a look at my skills</h1>
          {/* <h3 className={style.h3}>
              A high school student and web developer
            </h3> */}
          <br />
          {/* <hr className={style.hr} /> */}
          <br />
          <br />
          {/* <p className={style.welcome}>Welcome to my portfolio!!</p> */}
          <br />
          <button className={style.btn}>
            <a href="https://github.com/Afraz-2005" target="_">
              Visit my Github
            </a>
          </button>
        </div>
      </div>
      <div className={style.reside}>
        <div className={style.info}>
          <Particles
            className={style.particles}
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
                color: {
                  value: ["#3498db","#9b59b6"],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#b6b2b2",
                  },
                },
                opacity: {
                  value: 0.5211089197812949,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 8.017060304327615,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 12.181158184520175,
                    size_min: 0.1,
                    sync: true,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#c8c8c8",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />

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
                <div className={style.rn}>
                  <img src={Reactnative} alt="C++" className={style.logos} />
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
          <Particles className={style.particles}
              params={{
                "particles": {
                  "number": {
                    "value":100,
                    "density": {
                      "enable": true,
                      "value_area": 1000
                    }
                  },
                  "color": {
                    "value": ["#3498db","#9b59b6"]
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#b6b2b2"
                    }
                  },
                  "opacity": {
                    "value": 0.5211089197812949,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 8.017060304327615,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 12.181158184520175,
                      "size_min": 0.1,
                      "sync": true
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#c8c8c8",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            />
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
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.aboutInfo}>
          <div className={style.firstChild}>
            <h1
              style={{
                color: "rgb(225, 173, 255",
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
            <div className={style.child1a}>
              <p>Made by Imam Mahbir Afraz 2022 &copy; All rights researved</p>
            </div>
          </div>
          <div className={style.child2}>
            <Link to="/">Home </Link>
            <Link to="./skills">Skills </Link>
            <Link to="./projects">Project </Link>
            <Link to="./contact">Contact</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
