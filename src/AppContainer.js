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
  topbar,
  toolbar,
  appLayout,
  content,
  fullPage
} from "./styles/AppLayout";
import "./typography.css";

import { createBrowserHistory } from "history";

import { useHistory } from "react-router-dom";
import { thistle } from "color-name";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {});
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
      <div>
        <BodyStack />
      </div>
    );
  }
}
export default withRouter(App);

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

function BodyStack(props) {
  const variants = {
    home: {
      backgroundColor: "#0039CB",
      transition: { duration: 1.0 }
    },
    first: {
      backgroundColor: "#0039CB",
      transition: { duration: 1.0 }
    },
    second: { backgroundColor: "#D50101", transition: { duration: 1.0 } },
    third: { backgroundColor: "#FAF455", transition: { duration: 1.0 } }
  };
  const controls = useAnimation();
  const handleChange = newValue => {
    console.log(newValue);
    if (newValue === 0) {
      // history.push("/whatif");

      controls.start("first");
    } else if (newValue === 1) {
      // history.push("/inventions");
      controls.start("second");
    } else if (newValue === 2) {
      // history.push("/favourites");
      controls.start("third");
    }
  };
  return (
    <Stack
      {...appLayout}
      gap={0}
      initial="second"
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
          <BottomBar showBottomBar={true} handleChange={handleChange} />
        </Route>
        <Route path="/inventions">
          <Frame {...content}>
            <Inventions />
          </Frame>
          <BottomBar showBottomBar={true} handleChange={handleChange} />
        </Route>
        <Route path="/favourites">
          <Frame {...content}>
            <Favourites />
          </Frame>
          <BottomBar showBottomBar={true} handleChange={handleChange} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Stack>
  );
}
{
  /* <ThemeProvider theme={theme}>
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
      <BottomBar showBottomBar={true} handleChange={handleChange} />
    </Route>
    <Route path="/inventions">
      <Frame {...content}>
        <Inventions />
      </Frame>
      <BottomBar showBottomBar={true} handleChange={handleChange} />
    </Route>
    <Route path="/favourites">
      <Frame {...content}>
        <Favourites />
      </Frame>
      <BottomBar showBottomBar={true} handleChange={handleChange} />
    </Route>
    <Route path="/">
      <Home handler={StageHandler} />
    </Route>
  </Switch>
</Stack>
</ThemeProvider> */
}
// const [stage, setStage] = React.useState(1);
// const history = useHistory();
// const [showBottomBar, setBottomBar] = React.useState(false);
// history.listen(location => {});
// const variants = {
//   home: {
//     backgroundColor: "#2962FF",
//     transition: { duration: 1.0 }
//   },
//   first: {
//     backgroundColor: "#FAF455",
//     transition: { duration: 1.0 }
//   },
//   second: { backgroundColor: "#E50000", transition: { duration: 1.0 } },
//   third: { backgroundColor: "#2962FF", transition: { duration: 1.0 } }
// };
// const controls = useAnimation();

// const handleChange = (event, newValue) => {
//   if (newValue === 0) {
//     // history.push("/whatif");

//     controls.start("first");
//   } else if (newValue === 1) {
//     // history.push("/inventions");
//     controls.start("second");
//   } else if (newValue === 2) {
//     // history.push("/favourites");
//     controls.start("third");
//   }
// };

// function StageHandler(stage) {
//   console.log(stage, "stage");
//   setStage(stage);
// }

// function BottomBar(props) {
//   if (props.showBottomBar === false) {
//     return null;
//   } else {
//     return (
//       <Frame initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...toolbar}>
//         <BottomNavigationBar handleChange={props.handleChange} value={0} />
//       </Frame>
//     );
//   }
// }
