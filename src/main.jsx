import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "@fontsource/lato/index.css";
import "./styles/index.scss";

import { Routes } from "./Routes";
import { colors } from "./GlobalTheme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
