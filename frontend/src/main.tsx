import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import Theme from "./Theme";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
