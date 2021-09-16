// import { Style } from '@material-ui/icons'
import React, { Component } from "react";
import style from "./Contact.module.css";

import ScrollIndicator from "../components/ScrollIndicator";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

// import StyleIcon from "@material-ui/icons/Style";

export default class Contact extends Component {
  componentDidMount() {
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

          <div className={style.bannerChild}>
            <h2>Yo!</h2>
            <h1>Wanna get in touch?</h1>
            <button className={style.btn}>
              <a href="https://github.com/Afraz-2005" target="_">
                Via Github
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
            <h2 className={style.work}>Contact Me</h2>
            <div className={style.h12}>
              <div className={style.row}>
                <div className={style.column1}>
                  <div className={style.cpp}></div>
                  <div className={style.form}>
                    <div className={style.contactform}>
                      <div>
                        <input className={style.gmail} type="gmail" name="gmail" placeholder="gmail" style={{width: 199}}/>
                      </div>
                      <div>
                        <input className={style.name} type="text" name="user_name" placeholder="Fullname" style={{width: 199}}/>
                      </div>
                      <div>
                        <textarea className={style.description} name="Description" cols="20" rows="5" placeholder="description..."></textarea>
                      </div>
                      <div className={style.submit}>
                        <button className={style.submit}>
                          <Link to="./">Submit</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.about}>
          <div className={style.aboutInfo}>
            <h1>That's it here !!</h1>
            <br />
            <button className={style.btn}>
              <Link to="./" target="_" >
                Get back to home
              </Link>
            </button>
          </div>
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
              <Link to="./contact">Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
