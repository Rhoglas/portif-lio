import React from "react";

import { FiDownload } from "react-icons/fi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { ImArrowRight2 } from "react-icons/im";

import pdf from "../../../assets/pdf/Currículo - Rhoglas Lobato Aragão .pdf";
const ContBtn = () => {
  const linkedin = "https://www.linkedin.com/in/rhoglas-arag%C3%A3o-29946922a";

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      className="contBtn mt-5"
    >
      <a href={linkedin} target={"_blank"} id="linked" className="btn btn00">
        <span>
          Linkedin
          <i id="icon1">
            <TfiLinkedin className="linkedIcon" />
          </i>
        </span>
        <i id="icon2">
          <ImArrowRight2 />
        </i>
      </a>
      <a href={pdf} download={pdf} id="download" className="btn btn00">
        <span>
          Currículo
          <i id="icon3">
            <BsFillFileEarmarkPdfFill className="pdfIcon" />
          </i>
        </span>
        <i id="icon4">
          <FiDownload />
        </i>
      </a>
    </div>
  );
};

export default ContBtn;
