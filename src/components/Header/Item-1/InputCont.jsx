import React, { useContext, useEffect, useState } from "react";

import api from "../../../api/api";

import { context, context2 } from "../../../context/ctxServer";

const InputCont = (props) => {
  const ctx = useContext(context);
  const ctx2 = useContext(context2);

  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    async function userDatails() {
      try {
        const dataUser = await api.get("/Rhoglas");
        const dataUserRepos = await api.get("/Rhoglas/repos");
        const dataUserFollowing = await api.get("/Rhoglas/following");
        const dataUserFollowers = await api.get("/Rhoglas/followers");

        ctx2.setData(dataUser.data);
        ctx2.setDataUserRepos(dataUserRepos.data);
        ctx2.setDataUserFollowing(dataUserFollowing.data);
        ctx2.setDataUserFollowers(dataUserFollowers.data);
      } catch (err) {
        console.error(err);
      }
    }
    userDatails();
  }, []);

  async function getUser() {
    try {
      const res = await api.get(`/${nameUser}`);
      const repos = await api.get(`/${nameUser}/repos`);
      const followers = await api.get(`/${nameUser}/followers`);
      const following = await api.get(`/${nameUser}/following`);

      ctx.setUserData(res.data);
      ctx.setRepos(repos.data);
      ctx.setFollowers(followers.data);
      ctx.setFollowing(following.data);
    } catch (err) {
      console.error(err);
      alert(
        `Certifique-se de digitar o nome de login corretamente no campo de entrada no card, ERRO ENCONTRADO : ${err}`
      );
    }
  }

  return (
    <div className="inputCont">
      <div className="inputLabel">
        <label>Pesquise seu perfil</label>
        <input
          value={nameUser}
          autoComplete={"off"}
          onChange={(e) => setNameUser(e.target.value)}
          type="text"
          id="sSearch"
          placeholder="Inserir login"
        />
      </div>
      <input
        onClick={getUser}
        className="btn0"
        type="button"
        value="Pesquisar"
      />
    </div>
  );
};

export default InputCont;
