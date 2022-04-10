import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      fcl.currentUser().subscribe((user) => setUser({ ...user }));
    } else {
      fcl.unauthenticate();
    }
  }, [loggedIn]);

  const loginButton = async () => {
    let blocktoLogin = await fcl.logIn();

    console.log("blocktoLogin", blocktoLogin);

    if (blocktoLogin?.loggedIn) {
      setLoading(true);
      localStorage.setItem("loggedIn", blocktoLogin.loggedIn);
      history.push("/dashboard");
      setLoggedIn(true);
    } else {
      fcl.unauthenticate();
      setLoading(false);
      localStorage.setItem("loggedIn", false);
      setLoggedIn(false);
    }
  };

  const logout = () => {
    fcl.unauthenticate();
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
  };

  return (
    <>
      <Route exact path="/">
        <Login loginButton={loginButton} />
      </Route>
      <PrivateRoute exact component={Dashboard} path="/dashboard" />
    </>
  );
}

export default App;
