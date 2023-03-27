import React, { useContext } from "react";

import { context, context2 } from "../../../context/ctxServer";

const Profile = () => {
  const ctx = useContext(context);
  const ctx2 = useContext(context2);

  return (
    <div className="perfil">
      <img
        src={
          ctx.userData?.avatar_url != null
            ? ctx.userData?.avatar_url
            : ctx2.dataUser?.avatar_url
        }
        alt="Foto de perfil"
      />
      <h4>
        {ctx.userData?.name != null
          ? ctx.userData?.name?.split(" ")[0]
          : ctx2.dataUser?.name?.split(" ")[0]}
      </h4>
      <a
        href={
          ctx.userData?.html_url != null
            ? ctx.userData?.html_url
            : ctx2.dataUser?.html_url
        }
        target={"_blank"}
      >
        <h6 className="btn0">
          <i>{`_${
            ctx.userData?.login != null
              ? ctx.userData?.login
              : ctx2.dataUser?.login
          }`}</i>
        </h6>
      </a>
    </div>
  );
};

export default Profile;
