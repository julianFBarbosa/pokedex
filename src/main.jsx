import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";

import { Routes } from "./Routes";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  root
);
