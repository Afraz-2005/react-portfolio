// import { Style } from '@material-ui/icons'
import React, { Component } from "react";
import style from "./Projects.module.css";

// import Bot from "../images/myBot.png";

import laptop from "../images/laptop.png";
import Phone from "../images/phone.png";
import ScrollIndicator from "../components/ScrollIndicator";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import StyleIcon from "@material-ui/icons/Style";
import CodeIcon from "@material-ui/icons/Code";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export default class Projects extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {

    return (
      <div className={style.hero}>
        <ScrollIndicator />
        {/* banner start */}
        <div className={style.banner}>
        <Particles
          className={style.particles}
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#FC427B", "#55E6C1"],
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
                enable: true,
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

          <div className={style.bannerChild}>
            <h2>Welcome!</h2>
            <h1>Take a Look at my Works</h1>
            <button className={style.btn}>
              <a href="https://github.com/Afraz-2005" target="_">
                Visit my Github repos
              </a>
            </button>
          </div>
        </div>
        {/* banner end */}
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
                    value: ["#FC427B", "#55E6C1"],
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
                    enable: true,
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
            <h2 className={style.work}>What I work with</h2>
            <div className={style.h12}>
              <div className={style.row}>
                <div className={style.column1}>
                  <div className={style.cpp}>
                    <StyleIcon style={{ color: "#feca57" }} />
                  </div>
                  <p style={{ color: "#feca57" }}>D E S I G N I N G</p>
                </div>
                <div className={style.column1}>
                  <div className={style.cs}>
                    <CodeIcon style={{ color: "#48dbfb" }} />
                  </div>
                  <p style={{ color: "#48dbfb" }}>P R O G R A M M I N G</p>
                </div>
                <div className={style.column1}>
                  <div className={style.java}>
                    <div className="contain">
                      <LibraryBooksIcon style={{ color: "#ff6b6b" }} />
                    </div>
                  </div>
                  <p style={{ color: "#ff6b6b" }}>S T U D Y I N G</p>
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
                className={style.fch1}
              >
                Covid Cross
              </h1>
              <br />
              <p>
                I built Covid cross to help people keep daily updated during
                this on-going pandemic (Covid-19). This website contains live
                coronavirus data for Bangladesh and global vizualization charts.
                It also constists of The Covid symptoms, hotlines and
                precautions along with videos to help people get directed in the
                right way <br />
                <br />
                <hr className={style.nextHorizontal} />
              </p>
            </div>
            <br />
            <br />
            <div className={style.secondChild}>
              <img src={laptop} alt="Me" className={style.bot} />
            </div>
          </div>
          <a
            href="https://covid-cross.netlify.app/index.html"
            className={style.covid}
          >
            Visit Covid Cross
          </a>
          <div className={style.aboutInfo}>
            <div className={style.firstChild}>
              <h1
                style={{
                  color: "rgb(255, 65, 115)",
                }}
                className={style.fch1}
              >
                TODO.
              </h1>
              <br />
              <p>
                This is my first android and ios app, and it's made using React
                Native. Users can use voice commands to type in their todos. Not
                only that it also contains a calender built into it and a
                weather forecast too. This app is still under development, once
                done i'll publish it to google play store (Android) and App
                store (IOS). <br />
                <br />
                <hr className={style.nextHorizontal} />
              </p>
            </div>
            <br />
            <br />
            <div className={style.secondChild}>
              <img src={Phone} alt="Me" className={style.phone} />
            </div>
          </div>
          <p className={style.covid}>App under construction</p>
        </div>
        <div className={style.footerContainer}>
          <footer className={style.footer}>
            <div>
              <div className={style.child1}>
                <p>
                  Made by Imam Mahbir Afraz 2021 &copy; All rights researved
                </p>
              </div>
            </div>
            <div className={style.child2}>
              <Link to="/">Home </Link>
              <Link to="./skills">Skills </Link>
              <Link to="./projects">Project </Link>
              <Link to="./skills">Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
