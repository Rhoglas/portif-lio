import React from "react";
import HardSkills from "../components/Main/HardSkills";

import Sobre from "../components/Main/Sobre";
import SoftSkills from "../components/Main/SoftSkills";

const Main = () => {
  return (
    <div className="contMain">
      <Sobre />
      <SoftSkills />
      <HardSkills />
    </div>
  );
};

export default Main;
