import * as React from "react";
import { motion } from "framer-motion";
import { Frame, Stack } from "framer";
import { home } from "../../styles/AppLayout";
import { Switch, Route, Link } from "react-router-dom";
import "../../styles/main.css";

import LottieAnim from "../../components/Lottie/index";
import { textAlign } from "@material-ui/system";

const hello = {
  width: "100vw",
  height: "100%",
  overflow: "scroll",
  backgroundColor: "#255cf2"
};

const flexContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "transparent"
};

const animFrame = {
  flex: 3,
  height: "1fr",
  width: "100%",
  overflow: "visible",
  backgroundColor: "transparent"
};

const helloTextBox = {
  flex: 1,
  height: "1fr",
  width: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "transparent",

  overflow: "visible",
  textAlign: "left"
};

const text = {
  width: "100%",
  backgroundColor: "transparent",

  height: "100%",
  fontFamily: `"Work Sans", sans-serif`,
  color: "#ffffff",
  fontSize: 20,
  letterSpacing: 0,
  lineHeight: 1.2,
  fontWeight: 400,
  fontStyle: "normal"
};

const btnStack = {
  flex: 1.5,
  height: "1fr",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "transparent",
  overflow: "hidden"
};
const btnLink = {
  flex: 1,
  height: "1fr",
  width: "100%",
  display: "flex",
  border: "1px solid white",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "hidden",
  color: "#ffffff",
  fontSize: 21,
  letterSpacing: 0,
  lineHeight: 1.2,
  fontWeight: 400,
  fontStyle: "normal",
  textDecoration: "none"
};
export function Home(props) {
  return (
    <Frame style={hello} background={"#255cf2"}>
      <Stack style={flexContainer}>
        <Frame style={animFrame}>{/* <LottieAnim /> */}</Frame>
        <Stack style={helloTextBox}>
          <Frame style={text}>
            <span style={{ fontSize: 36 }}>Hi there,</span>
            <br />I am an AI that helps you to co-create futures in a large
            group.
            <br />
            <br />I multiply your ideas by remixing the concepts that you and
            your team are working with.
          </Frame>
        </Stack>
        <Stack style={btnStack}>
          <Link style={btnLink}>Try a demo</Link>
          <Link style={btnLink} to="/setup">
            Create a session
          </Link>
          <Link style={btnLink}>Join a session</Link>
        </Stack>
      </Stack>
    </Frame>
  );
}
// function Hello(props) {
//   const moveToPage = page => {
//     props.handler("", page);
//   };
//   return (

//   );
// }
