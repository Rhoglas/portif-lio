import React from "react";

import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Links = () => {
  const github = "https://github.com/Rhoglas";
  const linkedin = "https://www.linkedin.com/in/rhoglas-arag%C3%A3o-29946922a/";

  return (
    <div id="contFooter" className="contLinks">
      <h1 data-aos="fade-right">Entre em contato</h1>

      <div data-aos="zoom-in" className="contProfile">
        <a href={github} target={"_blank"}>
          <BsGithub size={60} color="#fff" />
        </a>
        <div>
          <p>GITHUB</p>
          <a href={github} target={"_blank"}>
            VISITAR
          </a>
        </div>
      </div>
      <div data-aos="fade-right" className="contProfile linkedin">
        <a href={linkedin} target={"_blank"}>
          <FaLinkedinIn size={60} color="#fff" />
        </a>
        <div>
          <p>LINKEDIN</p>
          <a href={linkedin} target={"_blank"}>
            VISITAR
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" className="contProfile instagram">
        <a href="#">
          <FaInstagram size={60} color="#fff" />
        </a>
        <div>
          <p>INSTAGRAM</p>
          <a href="#">VISITAR</a>
        </div>
      </div>
    </div>
  );
};

export default Links;
