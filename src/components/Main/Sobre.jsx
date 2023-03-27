import React, { useContext } from "react";

import { context2 } from "../../context/ctxServer";
// criar descrição automática

const Sobre = () => {
  const ctx2 = useContext(context2);
  return (
    <div className="container contSobre">
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        src={ctx2.dataUser.avatar_url}
        alt="Imagem de perfil"
      />
      <div data-aos="fade-right" className="contBio">
        <h5 data-aos="fade-right" data-aos-easing="ease-in-sine">
          Sobre
        </h5>
        <p>{ctx2.dataUser.bio}</p>
      </div>
    </div>
  );
};

export default Sobre;
