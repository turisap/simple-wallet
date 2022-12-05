import "reflect-metadata";
import "@solana/wallet-adapter-react-ui/styles.css";
import "reset-css";

import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";

import { extendBorsh } from "@utils/borsch";

import App from "./App";

ReactGA.initialize(process.env.GOOGLE_TRACKING_ID);

extendBorsh();

console.log(process.env.GOOGLE_TRACKING_ID);
console.log(process.env.REMOTE_CONFIG_API_KEY);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
