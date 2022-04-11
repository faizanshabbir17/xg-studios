import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import * as fcl from "@onflow/fcl";
const Dashboard = () => {
  let history = useHistory();
  const logout = () => {
    fcl.unauthenticate();
    localStorage.setItem("loggedIn", "false");
    history.push("/");
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Dashboard;
