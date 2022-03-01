import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "@fontsource/lato/index.css";
import "./styles/index.scss";

import { Routes } from "./Routes";
import { colors } from "./GlobalTheme";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  root
);
