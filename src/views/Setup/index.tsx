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
import axios from "axios";

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

const isValidUrl = string => {
  if (string.length < 1) {
    return ["", true];
  }
  var n = string.search(".pdf");

  if (n >= 0) {
    return ["Cannot accept pdf files", false];
  }

  try {
    new URL(string);
    return ["", true];
  } catch (_) {
    return ["Not a valid url", false];
  }
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

function Page1(props) {
  const [projectTitle, setProjectTitle] = React.useState("");
  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectTitle(event.target.value);
    props.setTitle(event.target.value);
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
    props.setProblem(event.target.value);
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
  const [url1, setUrl1] = React.useState("");
  const [url2, setUrl2] = React.useState("");
  const [url3, setUrl3] = React.useState("");

  const handleChange = (event, value) => {
    console.log(event.target.value);
    setProjectLinks(event.target.value);
    // props.setUrls(event.t)
  };

  const setURL = (idx, value) => {
    if (idx === 0) {
      setUrl1(value);
    } else if (idx === 1) {
      setUrl2(value);
    } else if (idx === 2) {
      setUrl3(value);
    }

    props.setUrls([url1, url2, url3]);
  };

  const submitNewWorkshop = () => {
    setUrl1(document.getElementById("url-field-1").value);
    setUrl2(document.getElementById("url-field-2").value);
    setUrl3(document.getElementById("url-field-3").value);

    if (isValidUrl(url1)[1]) {
      props.setUrls([url1, url2, url3]);
      props.handleSubmit([url1, url2, url3]);
    }
  };

  const moveToPage = val => {
    // console.log(val);
    props.handler("", val);
  };
  return (
    <Frame style={hello} background={"#255cf2"}>
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
                error={!isValidUrl(url1)[1]}
                onChange={(event, value) => {
                  setURL(0, event.target.value);
                }}
                id="url-field-1"
                label=""
                helperText={
                  isValidUrl(url1)[1] ? "Link 1" : isValidUrl(url1)[0]
                }
                placeholder="Ex. Wikipedia page."
              />
            </div>
            <div style={textField}>
              <TextField
                style={textField}
                required
                error={!isValidUrl(url2)[1]}
                onChange={(event, value) => {
                  setURL(1, event.target.value);
                }}
                id="url-field-2"
                label=""
                helperText={
                  isValidUrl(url2)[1] ? "Link 2" : isValidUrl(url2)[0]
                }
                placeholder="Ex. News article."
              />
            </div>
            <div style={textField}>
              <TextField
                style={textField}
                required
                error={!isValidUrl(url3)[1]}
                onChange={(event, value) => {
                  setURL(2, event.target.value);
                }}
                id="url-field-3"
                value={url3}
                helperText={
                  isValidUrl(url3)[1] ? "Link 3" : isValidUrl(url3)[0]
                }
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
            onClick={submitNewWorkshop}
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
  const [stage, setStage] = React.useState(1);

  // User details
  const [title, setTitle] = React.useState("");
  const [problem, setProblem] = React.useState("");
  const [urls, setUrls] = React.useState([]);

  function changeStage(value) {
    console.log(value);
    setStage(value);
  }

  function postToFirebase(_urls) {
    const workshop = {
      title: title,
      problem: problem,
      url1: _urls[0],
      url2: _urls[1],
      url3: _urls[2]
    };

    console.log("axios workshop", workshop);
    // setStage(4);
    axios.post("http://34.90.197.81:8080/", { workshop }).then(res => {
      console.log(res);
      console.log(res.data);
      alert("success");
    });
  }

  if (stage === 1) {
    return (
      <Page1
        handler={(value, page) => {
          console.log(value, page);
          setStage(page);
        }}
        setTitle={title => {
          setTitle(title);
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
        setProblem={problem => {
          setProblem(problem);
          console.log(problem, "upperlevel");
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
        setUrls={urls => {
          setUrls(urls);
          console.log(urls, "upper");
        }}
        handleSubmit={urls => {
          postToFirebase(urls);
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
