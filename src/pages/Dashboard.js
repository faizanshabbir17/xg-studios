import { useContext } from "react";
import { BloctoContext } from "../providers/BloctoProvider";

const Dashboard = () => {
  const { logout } = useContext(BloctoContext);
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Dashboard;
