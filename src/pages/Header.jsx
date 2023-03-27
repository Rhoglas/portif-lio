import React from "react";

import Card from "../components/Header/Card";
import ContTxt from "../components/Header/ContTxt";
import NavBar from "../components/Header/Item-2/NavBar";

export default () => {
  return (
    <div id="top" className="cont00">
      <NavBar />
      <div className="container cont0">
        <ContTxt />
        <Card />
      </div>
    </div>
  );
};
