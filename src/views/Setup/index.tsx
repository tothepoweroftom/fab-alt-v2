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
      marginTop: theme.spacing(5),
      fontSize: "11px"
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
  width: "80%",
  overflow: "visible",
  backgroundColor: "transparent",
  flexDirection: "row",

  justifyContent: "flex-end"
};

const btnFrameCenter = {
  flex: 1,
  height: "20%",
  width: "80%",
  overflow: "visible",
  backgroundColor: "transparent",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};
const btnStyle = {};

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

const DotStyle = {
  width: "40%",
  minWidth: "220px",
  padding: "0px",
  height: "10%",
  overflow: "visible",
  // border: "1px solid white",
  display: "flex",
  flexDirection: "row"
};
const DotButton = {
  flex: 1,
  height: "100%",
  display: "flex",
  margin: "0px",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  background: "transparent"
};
const Dot = {
  width: 18,

  height: 18,
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: "50%"
};

function PageIndicator(props) {
  const [stage, setStage] = React.useState(0);
  function handleClick(val) {
    // console.log(val);
    props.handler(val);
  }

  return (
    <Stack style={DotStyle}>
      <Frame style={DotButton}>
        <Frame
          style={Dot}
          whileTap={{ scale: 0.8 }}
          opacity={props.index == 0 ? 1 : 0.45}
          onClick={() => {
            handleClick(1);
          }}
        />
      </Frame>
      <Frame style={DotButton}>
        <Frame
          style={Dot}
          whileTap={{ scale: 0.8 }}
          opacity={props.index == 1 ? 1 : 0.45}
          onClick={() => {
            handleClick(2);
          }}
        />
      </Frame>
      <Frame style={DotButton}>
        <Frame
          style={Dot}
          whileTap={{ scale: 0.8 }}
          opacity={props.index == 2 ? 1 : 0.45}
          onClick={() => {
            handleClick(3);
          }}
        />
      </Frame>
    </Stack>
  );
}

function Hello(props) {
  const moveToPage = page => {
    props.handler("", page);
  };
  return (
    <Frame style={hello} background={"#255cf2"}>
      <Stack style={flexContainer}>
        <Frame style={animFrame}>
          <LottieAnim />
        </Frame>
        <Stack style={textBox}>
          <Frame style={text}>
            <span style={{ fontSize: 36 }}>Hi there,</span>
            <br />I am an AI that helps you to co-create futures in a large
            group.
            <br />
            <br />I multiply your ideas by remixing the concepts that you and
            your team are working with.
          </Frame>
        </Stack>
        <Stack style={btnFrameCenter}>
          <Button
            color="secondary"
            variant="contained"
            size="small"
            style={btnStyle}
            onClick={() => {
              props.handler("", 1);
            }}
          >
            Let's Go
          </Button>
        </Stack>
      </Stack>
    </Frame>
  );
}
function Page1(props) {
  const [projectTitle, setProjectTitle] = React.useState("");
  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectTitle(event.target.value);
  };
  const moveToPage = val => {
    props.handler("", val);
  };
  const submitTitle = () => {
    props.handler(projectTitle, 2);
  };
  return (
    <Frame style={hello} background={"#c4c219"}>
      <Stack style={flexContainer}>
        {/* <Frame style={topNav} /> */}

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

        <Stack style={btnFrame}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disabled={projectTitle.length < 10}
            onClick={submitTitle}
          >
            Next
          </Button>
        </Stack>
        <PageIndicator index={0} handler={moveToPage} />
      </Stack>
    </Frame>
  );
}
function Page2(props) {
  const [projectDescription, setProjectDescription] = React.useState("");
  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectDescription(event.target.value);
  };
  const moveToPage = val => {
    props.handler("", val);
  };
  const submitDescription = () => {
    props.handler(projectDescription, 3);
  };
  return (
    <Frame style={hello} background={"#ff5131"}>
      <Stack style={flexContainer}>
        {/* <Frame style={topNav} /> */}

        <Frame style={animFrameSmall}>
          <LottieAnim />
        </Frame>
        <Frame style={text}>
          Now just give me a bit of context about your project.{" "}
        </Frame>

        <Frame style={text}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                color="primary"
                id="filled-multiline-static"
                multiline
                style={textField}
                onChange={handleChange}
                rows="4"
                defaultValue=""
                placeholder="This project is about..."
                variant="filled"
              />
            </div>
          </form>
        </Frame>

        <Stack style={btnFrame}>
          <Button
            variant="contained"
            color="secondary"
            disabled={projectDescription.length < 10}
            onClick={submitDescription}
            size="small"
          >
            Next
          </Button>
        </Stack>
        <PageIndicator index={1} handler={moveToPage} />
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
    props.handler(projectLinks, 4);
  };
  const moveToPage = val => {
    // console.log(val);
    props.handler("", val);
  };
  return (
    <Frame style={hello} background={"#ff5131"}>
      <Stack style={flexContainer}>
        {/* <Frame style={topNav} /> */}
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

        <Stack style={btnFrame}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={submitLinks}
          >
            Generate
          </Button>
        </Stack>

        <PageIndicator index={2} handler={moveToPage} />
      </Stack>
    </Frame>
  );
}

function Page4(props) {
  const classes = useStyles();

  return (
    <Frame style={hello}>
      <Stack style={flexContainer}>
        <Frame height={"10%"} background={"transparent"} />
        <Frame
          style={{
            width: "80%",
            height: "50%",
            backgroundColor: "transparent"
          }}
        >
          <HelpCarousel />
        </Frame>
        <Frame
          style={{ width: "80%", top: "20px", backgroundColor: "transparent" }}
        >
          <h2 style={hereWeGo}> Here we go... </h2>
          <div className={classes.root}>
            <LinearProgress />
          </div>

          <Link to="/whatif">What If </Link>
        </Frame>
      </Stack>
    </Frame>
  );
}

export function Setup() {
  const [stage, setStage] = React.useState(0);
  function changeStage(value) {
    console.log(value);
    setStage(value);
  }

  if (stage === 0) {
    return (
      <Hello
        handler={(value, page) => {
          console.log(value, page);
          setStage(page);
        }}
      />
    );
  } else if (stage === 1) {
    return (
      <Page1
        handler={(value, page) => {
          console.log(value, page);
          setStage(page);
        }}
      />
    );
  } else if (stage === 2) {
    return (
      <Page2
        handler={(value, page) => {
          console.log(value, page);
          setStage(page);
        }}
      />
    );
  } else if (stage === 3) {
    return (
      <Page3
        handler={(value, page) => {
          console.log(value, page);
          setStage(page);
        }}
      />
    );
  } else if (stage === 4) {
    setTimeout(() => {});
    return (
      <Page4
        handler={(value, page) => {
          console.log(value, page);
          // setStage(page);
        }}
      />
    );
  } else {
    return <h1 />;
  }
}
