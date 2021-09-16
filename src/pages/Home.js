import React, { useEffect } from "react";
import style from "./Home.module.css";
import Navbar from "../components/Navbar";
import MailIcon from "@material-ui/icons/Mail";
import Illustration from "../images/techlife.png";
import Bot from "../images/myBot.png";
import { Link } from "react-router-dom";
import ScrollIndicator from "../components/ScrollIndicator";
// import { useEffect } from "react";
import Particles from "react-particles-js";
// import Brightness4Icon from "@material-ui/icons/Brightness4";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className={style.hero}>
      <Navbar />
      <ScrollIndicator />
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
          <div className={style.btns}>
            <button className={style.btn}>
              <a href="https://github.com/Afraz-2005" target="_">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className={style.child2a}>
          <img src={Illustration} alt="human" className={style.human} />
          <div className={style.icons}>
            <div className={style.childs}>
              <MailIcon className={style.icon} />
              <p className={style.iconText}>mahbirafraz2007@gmail.com</p>
            </div>
            <br />
            <br />
          </div>
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

          <h1 className={style.h12}>
            Person - Undefined <br />
            Country - Bangladesh <br />
            Profession - Student <br />
            {/* City - Dhaka <br /> */}
          </h1>
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
            <Link to="./projects">Project </Link>
            <Link to="./contact">Contact</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
