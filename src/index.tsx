import * as React from "react";
import { render } from "react-dom";
import { Frame, Stack, Page, Color, useAnimation, useCycle } from "framer";
import { BottomNavigationBar } from "../src/components/BottomNavigation";
import { WhatIf } from "./views/WhatIf/index.tsx";
import { Favourites } from "./views/Favourites/index.tsx";

import { Inventions } from "./views/Inventions/index.tsx";
import { Home } from "./views/Home/index.tsx";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  homePage,
  topbar,
  toolbar,
  appLayout,
  content
} from "./styles/AppLayout";
import "./typography.css";

import { useHistory } from "react-router-dom";

export function App() {
  const [stage, setStage] = React.useState(0);
  const history = useHistory();

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
    console.log(newValue);

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
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Stack
        {...appLayout}
        initial="first"
        animate={controls}
        variants={variants}
      >
        <Frame {...topbar} />
        <Frame {...content}>
          <Switch>
            <Route path="/whatif">
              <WhatIf />
            </Route>
            <Route path="/inventions">
              <Inventions />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Frame>
        <Frame {...toolbar}>
          <BottomNavigationBar handleChange={handleChange} value={0} />
        </Frame>
      </Stack>
    </>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
