import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { config } from "@onflow/fcl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

config()
  // connect to Flow testnet
  .put("accessNode.api", "https://access-testnet.onflow.org")
  // use Blocto testnet wallet with HTTP/POST
  .put(
    "discovery.wallet",
    "https://flow-wallet-testnet.blocto.app/api/flow/authn"
  )
  .put("discovery.wallet.method", "HTTP/POST");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
