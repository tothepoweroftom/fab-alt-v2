import * as React from "react";
import { render } from "react-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./styles/MuiTheme";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppContainer from "./AppContainer";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
