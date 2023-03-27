import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";

import { context, context2 } from "../../context/ctxServer";

const Repos = () => {
  const ctx = useContext(context);
  const ctx2 = useContext(context2);

  return (
    <div className="repoCont">
      <div className="repoHeader">
        <Link to="/">
          <h3>
            <BsArrowLeftSquareFill size={40} />
          </h3>
        </Link>
        <h2>Repositórios</h2>
      </div>
      <div className="repo">
        {ctx.userData.name != null
          ? ctx?.repos.map((e) => (
              <div className="repoCard" key={e.id}>
                <div className="repoPerfil">
                  <div className="repoImg">
                    <img src={ctx.userData.avatar_url} alt="imagem de perfil" />
                    <p>{ctx.userData.login}</p>
                  </div>
                  <div className="repoName">
                    <a target={"_blank"} href={e.html_url}>
                      {e.name}
                    </a>
                  </div>
                </div>
                <div className="repoTxt">
                  <div className="linguage">
                    <span>Descrição</span>
                    <p>{e.description ? e.description : "Indisponível"}</p>
                  </div>
                </div>
                <div className="typeRepo">
                  <span>{e.visibility}</span>
                  <div>
                    <p>Linguagem: </p>
                    <i>{e.language ? e.language : "Indisponivel"}</i>
                  </div>
                </div>
              </div>
            ))
          : ctx2?.dataUserRepos.map((e) => (
              <div className="repoCard" key={e.id}>
                <div className="repoPerfil">
                  <div className="repoImg">
                    <img
                      src={ctx2.dataUser.avatar_url}
                      alt="imagem de perfil"
                    />
                    <p>{ctx2.dataUser.login}</p>
                  </div>
                  <div className="repoName">
                    <a target={"_blank"} href={e.html_url}>
                      {e.name}
                    </a>
                  </div>
                </div>
                <div className="repoTxt">
                  <div className="linguage">
                    <span>Descrição</span>
                    <p>{e.description ? e.description : "Indisponível"}</p>
                  </div>
                </div>
                <div className="typeRepo">
                  <span>{e.visibility}</span>
                  <div>
                    <p>Linguagem: </p>
                    <i>{e.language ? e.language : "Indisponivel"}</i>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Repos;
