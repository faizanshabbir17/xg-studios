import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const [first, setfirst] = useState(true);
  const logIn = localStorage.getItem("loggedIn");
  console.log("logIn", typeof logIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        logIn === "true" ? (
          <>
            {console.log("true")}
            <Component {...props}></Component>
          </>
        ) : (
          <>
            {console.log("false")}
            <Redirect to="/" />
          </>
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
