import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";

import { context, context2 } from "../../context/ctxServer";

const Followers = () => {
  const ctx = useContext(context);
  const ctx2 = useContext(context2);

  return (
    <div className="followerCard">
      <div className="followersHeader">
        <Link to="/">
          <h3>
            <BsArrowLeftSquareFill size={40} />
          </h3>
        </Link>
        <h2>Seguidores</h2>
      </div>
      <div className="followersCont">
        {ctx.userData.name != null
          ? ctx.followers?.map((e) => (
              <Link key={e.id} to={e.html_url} target={"_blank"}>
                <div className="followersProfle">
                  <img src={e.avatar_url} alt="Foto de perfil" />
                  <p>{e.login}</p>
                </div>
              </Link>
            ))
          : ctx2.dataUserFollowers?.map((e) => (
              <Link key={e.id} to={e.html_url} target={"_blank"}>
                <div className="followersProfle">
                  <img src={e.avatar_url} alt="Foto de perfil" />
                  <p>{e.login}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Followers;
