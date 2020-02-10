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

import { useHistory } from "react-router-dom";
import { thistle } from "color-name";

const bottomBarNeeded = ["/whatif", "/inventions", "/favourites"];

export function App() {
  const [stage, setStage] = React.useState(1);
  const history = useHistory();
  const [showBottomBar, setBottomBar] = React.useState(false);
  history.listen(location => {
    //Do your stuff here

    console.log(location.pathname);
    if (bottomBarNeeded.includes(location.pathname)) {
      console.log("show bottom bar");
      setBottomBar(true);
    } else {
      setStage(0);
      console.log("hide bottom bar");
      setBottomBar(false);
    }
  });
  const variants = {
    home: {
      backgroundColor: "#2962FF",
      transition: { duration: 1.0 }
    },
    first: {
      backgroundColor: "#FAF455",
      transition: { duration: 1.0 }
    },
    second: { backgroundColor: "#E50000", transition: { duration: 1.0 } },
    third: { backgroundColor: "#2962FF", transition: { duration: 1.0 } }
  };
  const controls = useAnimation();

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      history.push("/whatif");

      controls.start("first");
    } else if (newValue === 1) {
      history.push("/inventions");
      controls.start("second");
    } else if (newValue === 2) {
      history.push("/favourites");
      controls.start("third");
    }
  };

  function StageHandler(stage) {
    console.log(stage, "stage");
    setStage(stage);
  }

  function BottomBar(props) {
    if (props.showBottomBar === false) {
      return null;
    } else {
      return (
        <Frame initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...toolbar}>
          <BottomNavigationBar handleChange={props.handleChange} value={0} />
        </Frame>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        {...appLayout}
        gap={0}
        initial="first"
        animate={controls}
        variants={variants}
      >
        <Frame {...topbar} />
        <Switch>
          <Route path="/setup">
            <Frame {...fullPage}>
              <Setup />
            </Frame>
          </Route>
          <Route path="/whatif">
            <Frame {...content}>
              <WhatIf />
            </Frame>
          </Route>
          <Route path="/inventions">
            <Frame {...content}>
              <Inventions />
            </Frame>
          </Route>
          <Route path="/favourites">
            <Frame {...content}>
              <Favourites />
            </Frame>
          </Route>
          <Route path="/">
            <Home handler={StageHandler} />
          </Route>
        </Switch>
        <BottomBar showBottomBar={showBottomBar} handleChange={handleChange} />
      </Stack>
    </ThemeProvider>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
