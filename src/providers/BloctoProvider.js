import * as fcl from "@onflow/fcl";
import { useHistory } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { storeLocalData, getLocalData } from "../utils/localStorage";
export const BloctoContext = createContext({});

export default function BloctoProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();
  useEffect(() => {
    let isLoggedIn = getLocalData("loggedIn");
    if (isLoggedIn === "true") {
      fcl.currentUser().subscribe((user) => setUser({ ...user }));
    } else {
      fcl.unauthenticate();
    }
  }, [loggedIn]);

  const loginButton = async () => {
    let blocktoLogin = await fcl.logIn();
    if (blocktoLogin?.loggedIn) {
      setLoading(true);
      storeLocalData("loggedIn", "true");
      history.push("/dashboard");
      setLoggedIn(true);
    } else {
      fcl.unauthenticate();
      setLoading(false);
      storeLocalData("loggedIn", "false");
      setLoggedIn(false);
    }
  };
  const logout = () => {
    fcl.unauthenticate();
    setLoggedIn(false);
    storeLocalData("loggedIn", "false");
    history.push("/");
  };
  return (
    <BloctoContext.Provider
      value={{
        loginButton,
        logout,
      }}
    >
      {children}
    </BloctoContext.Provider>
  );
}
