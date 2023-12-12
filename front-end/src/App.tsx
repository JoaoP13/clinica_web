import React from "react";
import Routes from "./pages/router";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Verdana"].join(","),
  },
});

const App = () => {
  return (
    <div className="main-div">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
