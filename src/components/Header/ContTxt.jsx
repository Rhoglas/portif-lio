import React from "react";
import ContBtn from "./Item-2/ContBtn";

import TxtWriter from "./Item-2/TxtWriter";

const ContTxt = () => {
  return (
    <div className="contTxt">
      <h2 data-aos="zoom-in-up" data-aos-duration="1500">
        Eu sou, <TxtWriter />
      </h2>
      <h5 data-aos="zoom-in-up" data-aos-duration="1500" className="mt-2 ">
        Desenvolvedor Front-End
      </h5>
      <ContBtn />
    </div>
  );
};

export default ContTxt;
