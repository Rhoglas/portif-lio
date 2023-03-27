import React from "react";
import InputCont from "./Item-1/InputCont";
import NumCont from "./Item-1/NumCont";
import Profile from "./Item-1/Profile";

// Import components
import bg from "../../assets/bg0.svg";

const Card = () => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="2000"
      style={{ backgroundImage: `url(${bg})` }}
      className="contCard"
    >
      <Profile />
      <NumCont />
      <InputCont />
    </div>
  );
};

export default Card;
