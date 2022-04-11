import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import BloctoProvider from "./providers/BloctoProvider";

function App() {
  return (
    <>
      <BloctoProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact component={Dashboard} path="/dashboard" />
      </BloctoProvider>
    </>
  );
}

export default App;
