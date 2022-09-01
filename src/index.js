import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleColorMode from "./components/ToggleColorMode";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ToggleColorMode>
      <CssBaseline /> {/* normalize.css */}
      {/* DarkMode Middleware */}
      <App />
    </ToggleColorMode>
  </React.StrictMode>
);
