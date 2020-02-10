import * as React from "react";
import { motion } from "framer-motion";
import { Frame, Stack } from "framer";
import Button from "@material-ui/core/Button";
import { home } from "../../styles/AppLayout";
import { Switch, Route, Link } from "react-router-dom";
import { LottieAnim } from "../../components/Lottie";
import TextField from "@material-ui/core/TextField";
import { HelpCarousel } from "./HelpCarousel";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(5)
    }
  })
);

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
  height: "30%",
  width: "80%",
  overflow: "visible",
  backgroundColor: "transparent"
};

const animFrameSmall = {
  flex: 1,
  height: "25%",
  width: "80%",
  overflow: "visible",
  backgroundColor: "transparent"
};

const text = {
  width: "80%",
  height: "1fr",
  fontFamily: `"Work Sans", sans-serif`,
  color: "#ffffff",
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 1.2,
  fontWeight: 400,
  fontStyle: "normal",
  textAlign: "left",
  backgroundColor: "transparent"
};

const textBox = {
  flex: 1,
  height: "1fr",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "visible",
  backgroundColor: "transparent"
};

const btnFrame = {
  flex: 1,
  height: "20%",
  width: "100%",
  overflow: "visible",
  backgroundColor: "transparent"
};

const topNav = {
  width: "80%",
  height: "6%",
  overflow: "visible"
};

const textField = {
  width: "100%",
  padding: "5px 0"
};

const hereWeGo = {
  flex: 1,
  height: 1,
  width: "100%",
  fontFamily: `"Work Sans", sans-serif`,
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: 21,
  letterSpacing: 0,
  textAlign: "left",
  lineHeight: 1.2,
  fontWeight: 400,
  fontStyle: "normal"
};

const Page1 = props => (
  <Frame
    initial={{ opacity: 0 }}
    transition={{ duration: 2 }}
    animate={{ opacity: 1 }}
    style={hello}
  >
    <Stack style={flexContainer}>
      <Frame style={animFrame}>
        <LottieAnim />
      </Frame>
      <Stack style={textBox}>
        <Frame style={text}>
          <span style={{ fontSize: 36 }}>Hi there,</span>
          <br />I am an AI that helps you to co-create futures in a large group.
          <br />
          <br />I multiply your ideas by remixing the concepts that you and your
          team are working with.
        </Frame>
      </Stack>
      <Frame style={btnFrame}>
        <Button color="secondary" variant="contained" onClick={props.handler}>
          Let's Go
        </Button>
      </Frame>
    </Stack>
  </Frame>
);

function Page2(props) {
  const [projectTitle, setProjectTitle] = React.useState("");
  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectTitle(event.target.value);
  };

  const submitTitle = () => {
    props.handler(projectTitle);
  };
  return (
    <Frame
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
      style={hello}
    >
      <Stack style={flexContainer}>
        <Frame style={topNav} />

        <Frame style={animFrameSmall}>
          <LottieAnim />
        </Frame>
        <Frame style={text}>
          You are the first one here. Let’s give a title to this project.
        </Frame>

        <Frame style={text}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                style={textField}
                required
                id="standard-error-helper-text"
                label=""
                onChange={handleChange}
                // value={projectTitle}
                placeholder="Let's Imagine..."
              />
            </div>
          </form>
        </Frame>

        <Frame style={btnFrame}>
          <Button
            variant="contained"
            color="secondary"
            disabled={projectTitle.length < 10}
            onClick={submitTitle}
          >
            Ready
          </Button>
        </Frame>
      </Stack>
    </Frame>
  );
}
function Page3(props) {
  const [projectLinks, setProjectLinks] = React.useState(["", "", ""]);
  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectLinks(event.target.value);
  };

  const submitLinks = () => {
    props.handler(projectLinks);
  };
  return (
    <Frame
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
      style={hello}
    >
      <Stack style={flexContainer}>
        <Frame style={topNav} />
        <Frame style={animFrameSmall}>
          <LottieAnim />
        </Frame>
        <Frame style={text}>
          Let’s build up my brain. Give me some context by pasting links to
          inspiring articles or posts about this topic.
        </Frame>
        <Frame style={text}>
          <form noValidate autoComplete="off">
            <div style={textField}>
              <TextField
                style={textField}
                required
                id="standard-error-helper-text"
                label=""
                helperText="Link 1"
                placeholder="Ex. Wikipedia page."
              />
            </div>
            <div style={textField}>
              <TextField
                style={textField}
                required
                id="standard-error-helper-text"
                label=""
                helperText="Link 2"
                placeholder="Ex. News article."
              />
            </div>
            <div style={textField}>
              <TextField
                style={textField}
                required
                id="standard-error-helper-text"
                label=""
                helperText="Link 3"
                placeholder="Ex. Blog post."
              />
            </div>
          </form>
        </Frame>

        <Frame style={btnFrame}>
          <Button variant="contained" color="secondary" onClick={submitLinks}>
            Ready
          </Button>
        </Frame>
      </Stack>
    </Frame>
  );
}

function Page4(props) {
  const classes = useStyles();

  return (
    <Frame
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
      style={hello}
    >
      <Stack style={flexContainer}>
        <Frame style={topNav} />
        <Frame style={{ width: "80%", height: "50%" }}>
          <HelpCarousel />
        </Frame>
        <Frame
          style={{ width: "80%", top: "20px", backgroundColor: "transparent" }}
        >
          <h2 style={hereWeGo}> Here we go... </h2>
          <div className={classes.root}>
            <LinearProgress />
          </div>
        </Frame>
      </Stack>
    </Frame>
  );
}

export function Setup() {
  const [stage, setStage] = React.useState(2);
  function changeStage(value) {
    console.log(value);
    setStage(value);
  }

  if (stage === 0) {
    return (
      <Page1
        handler={() => {
          console.log("clicked", 1);
          setStage(1);
        }}
      />
    );
  } else if (stage === 1) {
    return (
      <Page2
        handler={value => {
          console.log(value);
          setStage(2);
        }}
      />
    );
  } else if (stage === 2) {
    return (
      <Page3
        handler={() => {
          console.log("clicked");
          setStage(3);
        }}
      />
    );
  } else if (stage === 3) {
    return (
      <Page4
        handler={() => {
          console.log("clicked");
          setStage(0);
        }}
      />
    );
  } else {
    return <h1>asdf</h1>;
  }
}
