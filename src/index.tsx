import * as React from "react";
import { render } from "react-dom";
import { Frame, Stack, Page, Color, useAnimation, useCycle } from "framer";
import { BottomNavigationBar } from "../src/components/BottomNavigation";
import { WhatIf } from "./views/WhatIf/index.tsx";

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
import "./styles/block-styles.css";
import { useHistory } from "react-router-dom";

export function App() {
  const [stage, setStage] = React.useState(0);
  const history = useHistory();

  const variants = {
    home: {
      backgroundColor: "#D50101",
      transition: { duration: 1.5 }
    },
    first: {
      backgroundColor: "#DEDE78",
      transition: { duration: 1.5 }
    },
    second: { backgroundColor: "#E50000", transition: { duration: 1.5 } },
    third: { backgroundColor: "#2962FF", transition: { duration: 1.5 } }
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
    <Stack
      {...appLayout}
      initial="first"
      animate={controls}
      variants={variants}
    >
      <Frame {...topbar} />
      <Switch>
        <Route path="/whatif">
          <WhatIf />
        </Route>
        <Route path="/inventions">
          <Inventions />
        </Route>
        <Route path="/favourite" />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Frame {...toolbar}>
        <BottomNavigationBar handleChange={handleChange} value={0} />
      </Frame>
    </Stack>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
