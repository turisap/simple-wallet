import "reflect-metadata";
import "@solana/wallet-adapter-react-ui/styles.css";
import "reset-css";

import React from "react";
import ReactDOM from "react-dom/client";

import { extendBorsh } from "@utils/borsch";

import App from "./App";

extendBorsh();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
