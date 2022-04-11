import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { getLocalData } from "../utils/localStorage";

function PrivateRoute({ component: Component, ...rest }) {
  const [first, setfirst] = useState(true);
  const logIn = getLocalData("loggedIn");

  return (
    <Route
      {...rest}
      render={(props) =>
        logIn === "true" ? (
          <>
            <Component {...props}></Component>
          </>
        ) : (
          <>
            <Redirect to="/" />
          </>
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
