import React, { useContext } from "react";
import { BloctoContext } from "../providers/BloctoProvider";

const Login = () => {
  const { loginButton } = useContext(BloctoContext);
  return (
    <>
      <button onClick={loginButton}>login</button>
    </>
  );
};
export default Login;
