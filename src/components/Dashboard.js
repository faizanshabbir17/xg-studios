import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();
  const logout = () => {
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
