import React from "react";

import {
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiBootstrap,
  SiJquery,
} from "react-icons/si";
import { FaGitAlt, FaSass, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiCss3Fill } from "react-icons/ri";

// import logoAxios from "../../../public/img/axios.png";
import logoAxios from "../../assets/img/axios.png";
import viteJslogo from "../../assets/img/vitejs.png";

const HardSkills = () => {
  const html = "https://www.w3schools.com/html/";
  const css = "https://www.w3schools.com/css/default.asp";
  const js = "https://www.javascript.com/";
  const axios = "https://axios-http.com/";
  const git = "https://git-scm.com/";
  const github = "https://github.com/";
  const netlify = "https://www.netlify.com/";
  const sass = "https://sass-lang.com/";
  const bootstrap = "https://getbootstrap.com/";
  const nodeJS = "https://nodejs.org/en";
  const viteJS = "https://vitejs.dev/";
  const npm = "https://www.npmjs.com/";
  const jQuery = "https://jquery.com/";
  const reactJS = "https://react.dev/";
  return (
    <div className="container">
      <div className="skills">
        <div data-aos="zoom-in-up" className="skillHeader">
          <h2>Hard Skills</h2>
        </div>
        <div className="skBasic">
          <div className="skillCard">
            <a
              href={html}
              target={"_blank"}
              data-aos-duration="1100"
              data-aos="flip-up"
              style={{ color: "#E44D26" }}
              className="skillIcon"
            >
              <SiHtml5 size={80} />
              <p style={{ color: "#E44D26" }}>HTML</p>
            </a>
            <a
              href={css}
              target={"_blank"}
              data-aos-duration="1100"
              data-aos="flip-down"
              style={{ color: "#006EB4" }}
              className="skillIcon"
            >
              <RiCss3Fill size={80} />
              <p style={{ color: "#006EB4" }}>CSS</p>
            </a>
            <a
              href={js}
              target={"_blank"}
              data-aos-duration="1100"
              data-aos="flip-up"
              style={{ backgroundColor: "#000", color: "#F7D800" }}
              className="skillIcon"
            >
              <SiJavascript size={80} />
              <p style={{ color: "#F7D800" }}>JavaScript</p>
            </a>
            <a
              href={axios}
              target={"_blank"}
              data-aos-duration="1100"
              data-aos="flip-up"
              style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="skillIcon"
            >
              <img
                src={logoAxios}
                alt="logo do axios"
                style={{
                  width: "100%",
                  padding: "2rem 0 0 ",
                }}
              />
              <p style={{ color: "#0000ff" }}>Axios</p>
            </a>
            <a
              href={git}
              target={"_blank"}
              data-aos="flip-down"
              data-aos-duration="1100"
              style={{ color: "#E84D31" }}
              className="skillIcon"
            >
              <FaGitAlt size={80} />
              <p style={{ color: "#E84D31" }}>Git</p>
            </a>
            <a
              href={github}
              target={"_blank"}
              data-aos="flip-up"
              data-aos-duration="1100"
              style={{ color: "#000" }}
              className="skillIcon"
            >
              <BsGithub size={80} />
              <p style={{ color: "#000" }}>GitHub</p>
            </a>
            <a
              href={netlify}
              target={"_blank"}
              data-aos="flip-up"
              data-aos-duration="1100"
              style={{ color: "#30AEB4" }}
              className="skillIcon"
            >
              <SiNetlify size={80} />
              <p style={{ color: "#30AEB4" }}>Netlify</p>
            </a>
            <a
              href={sass}
              target={"_blank"}
              data-aos="flip-down"
              data-aos-duration="1100"
              style={{ backgroundColor: "#C66394", color: "#fff" }}
              className="skillIcon"
            >
              <FaSass size={80} />
              <p style={{ color: "#fff" }}>Sass</p>
            </a>
            <a
              href={bootstrap}
              target={"_blank"}
              data-aos="flip-up"
              data-aos-duration="1100"
              style={{ color: "#7A10ED" }}
              className="skillIcon"
            >
              <SiBootstrap size={80} />
              <p style={{ color: "#7A10ED" }}>Bootstrap</p>
            </a>
            <a
              href={nodeJS}
              target={"_blank"}
              data-aos="flip-down"
              data-aos-duration="1100"
              style={{ backgroundColor: "#FFF", color: "#7EB445" }}
              className="skillIcon"
            >
              <FaNodeJs size={80} />
              <p style={{ color: "#7EB445" }}>Node JS</p>
            </a>
            <a
              href={viteJS}
              target={"_blank"}
              data-aos-duration="1100"
              data-aos="flip-up"
              style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="skillIcon"
            >
              <img
                src={viteJslogo}
                alt="logo react icons"
                style={{
                  width: "80%",
                }}
              />
              <p style={{ color: "#7994E8" }}>Vite JS</p>
            </a>
            <a
              href={npm}
              target={"_blank"}
              data-aos="flip-up"
              data-aos-duration="1100"
              style={{ color: "#CB0000" }}
              className="skillIcon"
            >
              <FaNpm size={80} />
              <p style={{ color: "#CB0000" }}>NPM</p>
            </a>
            <a
              href={jQuery}
              target={"_blank"}
              data-aos="flip-down"
              data-aos-duration="1100"
              style={{ color: "#1F5B93" }}
              className="skillIcon"
            >
              <SiJquery size={80} />
              <p style={{ color: "#1F5B93" }}>JQuery</p>
            </a>
            <a
              href={reactJS}
              target={"_blank"}
              data-aos="flip-up"
              data-aos-duration="1100"
              style={{ backgroundColor: "#000", color: "#5CCFEE" }}
              className="skillIcon"
            >
              <FaReact size={80} />
              <p style={{ color: "#5CCFEE" }}>React JS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardSkills;
