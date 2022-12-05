import "reflect-metadata";
import "@solana/wallet-adapter-react-ui/styles.css";
import "reset-css";

import React from "react";
import ReactDOM from "react-dom/client";

import { extendBorsh } from "@utils/borsch";
import { install } from "ga-gtag";

import App from "./App";

extendBorsh();

install(process.env.GOOGLE_TRACKING_ID);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
