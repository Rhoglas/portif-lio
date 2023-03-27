import React, { createContext, useState } from "react";

export const context = createContext({});
export const context2 = createContext({});

export const ContextProvider = ({ children }) => {
  const [repos, setRepos] = useState({});
  const [userData, setUserData] = useState({});
  const [followers, setFollowers] = useState({});
  const [following, setFollowing] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        repos,
        followers,
        following,
        setUserData,
        setRepos,
        setFollowers,
        setFollowing,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const SecondProvider = ({ children }) => {
  const [dataUser, setData] = useState({});
  const [dataUserRepos, setDataUserRepos] = useState({});
  const [dataUserFollowing, setDataUserFollowing] = useState({});
  const [dataUserFollowers, setDataUserFollowers] = useState({});

  return (
    <context2.Provider
      value={{
        dataUser,
        dataUserRepos,
        dataUserFollowing,
        dataUserFollowers,
        setData,
        setDataUserRepos,
        setDataUserFollowing,
        setDataUserFollowers,
      }}
    >
      {children}
    </context2.Provider>
  );
};
