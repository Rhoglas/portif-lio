import React from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";

const Success = () => {
  return (
    <div className="success">
      <div>
        <MdMarkEmailRead size={"5rem"} />
        <h1>E-mail enviado com sucesso!</h1>
      </div>
      <Link to="/">
        <button className="btn00">Voltar</button>
      </Link>
    </div>
  );
};

export default Success;
