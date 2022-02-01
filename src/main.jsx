import React from "react";
import ReactDOM from "react-dom";

import "@fontsource/lato/index.css";
import "./styles/index.scss";

import { Routes } from "./Routes";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  root
);
