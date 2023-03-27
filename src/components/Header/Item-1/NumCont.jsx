import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { context, context2 } from "../../../context/ctxServer";

const NumCont = () => {
  const ctx = useContext(context);
  const ctx2 = useContext(context2);

  return (
    <div className="contNum">
      <Link to="/repo" className="num">
        <h5>
          {ctx.userData?.public_repos != null
            ? ctx.userData?.public_repos
            : ctx2.dataUser?.public_repos}
        </h5>
        <p>Repositórios</p>
      </Link>
      <Link to="/followers" className="num">
        <h5>
          {ctx.userData?.followers != null
            ? ctx.userData?.followers
            : ctx2.dataUser?.followers}
        </h5>
        <p>Seguidores</p>
      </Link>
      <Link to="/following" className="num">
        <h5>
          {ctx.userData?.following != null
            ? ctx.userData?.following
            : ctx2.dataUser?.following}
        </h5>
        <p>Seguindo</p>
      </Link>
    </div>
  );
};

export default NumCont;
