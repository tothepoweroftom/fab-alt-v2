import * as React from "react";
import { render } from "react-dom";
import { Frame, Stack, Page, Color, useAnimation, useCycle } from "framer";
import { BottomNavigationBar } from "../src/components/BottomNavigation";
import { WhatIf } from "./views/WhatIf/index.tsx";
import { Favourites } from "./views/Favourites/index.tsx";
import { Setup } from "./views/Setup/index.tsx";

import { Inventions } from "./views/Inventions/index.tsx";
import { Home } from "./views/Home/index.tsx";
import { Switch, Route } from "react-router-dom";
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
import firebase from "./services/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.stage = 0;
    this.state = {
      selectedWorkshop: "ewys"
    };

    this.ref = firebase
      .firestore()
      .collection("workshops")
      .doc(this.state.selectedWorkshop);
  }

  componentDidMount() {
    this.ref.get().then(doc => {
      if (doc.exists) {
        const workshop = doc.data();

        this.setState({
          workshop: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
        alert("Sorry no such workshop exists");
      }
      console.log(this.state);
    });
  }

  onCollectionUpdate = querySnapshot => {
    // const workshops = [];
    // querySnapshot.forEach(doc => {
    //   const { id, inventions, whatifs, problem, title, words } = doc.data();
    //     workshops.push({
    //       key: doc.id,
    //       doc, // DocumentSnapshot
    //       id,
    //       inventions,
    //       whatifs,
    //       title,
    //       words
    //     });
    // });
    // this.setState({
    //   workshops
    // });
  };
  componentWillMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

    this.unlisten = this.props.history.listen((location, action) => {
      console.log(location);
      this.checkLocation(location);
    });
    console.log(this.props.location);
    this.checkLocation(this.props.location);
    console.log(this.stage);
  }
  componentWillUnmount() {
    this.unlisten();
  }

  checkLocation(location) {
    switch (location.pathname) {
      case "/whatif":
        this.stage = 1;
        break;
      case "/inventions":
        this.stage = 2;
        break;
      case "/favourites":
        this.stage = 3;
        break;
      default:
        this.stage = 0;
        break;
    }
  }
  render() {
    return (
      <div>
        <BodyStack stage={this.stage} />
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
      <Frame {...toolbar}>
        <BottomNavigationBar handleChange={props.handleChange} value={0} />
      </Frame>
    );
  }
}

function BodyStack(props) {
  React.useEffect(() => {
    // handleChange(props.stage);
    console.log("Body Stack", props.stage);
  });

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

      controls.start("home");
    } else if (newValue === 1) {
      // history.push("/inventions");
      controls.start("first");
    } else if (newValue === 2) {
      // history.push("/favourites");
      controls.start("second");
    } else if (newValue === 3) {
      // history.push("/favourites");
      controls.start("third");
    }
  };
  return (
    <Stack
      {...appLayout}
      gap={0}
      initial="home"
      animate={controls}
      variants={variants}
    >
      <Switch>
        <Route path="/setup">
          <Frame {...fullPage}>
            <Setup />
          </Frame>
        </Route>
        <Route path="/whatif">
          <Frame {...topbar} />

          <Frame {...content}>
            <WhatIf />
          </Frame>
          <BottomBar showBottomBar={true} handleChange={handleChange} />
        </Route>
        <Route path="/inventions">
          <Frame {...topbar} />

          <Frame {...content}>
            <Inventions />
          </Frame>
          <BottomBar showBottomBar={true} handleChange={handleChange} />
        </Route>
        <Route path="/favourites">
          <Frame {...topbar} />

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
