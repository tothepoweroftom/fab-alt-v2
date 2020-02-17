import * as React from "react";
import { render } from "react-dom";
import { Frame, Stack, Page, Color, useAnimation, useCycle } from "framer";
import { BottomNavigationBar } from "../src/components/BottomNavigation";
import { WhatIf } from "./views/WhatIf/index.tsx";
import { Favourites } from "./views/Favourites/index.tsx";
import { Setup } from "./views/Setup/index.tsx";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./styles/MuiTheme";
import { Inventions } from "./views/Inventions/index.tsx";
import { Home } from "./views/Home/index.tsx";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  homePage,
  topbar,
  toolbar,
  appLayout,
  content,
  fullPage,
  outerTheme
} from "./styles/AppLayout";
import "./typography.css";

import { createBrowserHistory } from "history";

import { useHistory } from "react-router-dom";
import { thistle } from "color-name";

import AppContainer from "./AppContainer";

export function App() {
  const [stage, setStage] = React.useState(1);
  const history = useHistory();
  const [showBottomBar, setBottomBar] = React.useState(false);
  history.listen(location => {});

  function StageHandler(stage) {
    console.log(stage, "stage");
    setStage(stage);
  }

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
