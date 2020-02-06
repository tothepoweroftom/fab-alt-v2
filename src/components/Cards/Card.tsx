import * as React from "react";
import {
  Frame,
  Stack,
  Page,
  transform,
  Color,
  addPropertyControls,
  ControlType
} from "framer";
import { tagCategories } from "../../utilities";
import { HyperBlock } from "../HyperBlock/index";
import * as RiTa from "rita";
import { Icon } from "../Icons";

const cardFrame = {
  width: "100%",
  height: "inherit",
  overflow: "hidden",
  borderRadius: 20,
  backgroundColor: "transparent"
};

const cardPageContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  // backgroundColor: "#ED0000",

  overflow: "hidden"
};
const textStack = {
  flex: 12,
  height: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ED0000",
  fontFamily: "VG5000, sans-serif",
  backgroundColor: "transparent",

  alignItems: "flex-start",
  overflow: "visible"
};
const heartButtonContainer = {
  flex: 1,
  height: 1,
  width: "100%",
  overflow: "visible",
  backgroundColor: "transparent",

  display: "flex",
  flexDirection: "row-reverse"
  // alignItems: "flex-end"
};

const heartButton = {
  width: 40,
  height: 40,
  overflow: "hidden",
  opacity: 0.5,
  // right: "2.5%",
  backgroundColor: "transparent",

  marginTop: "2.5%%"
};
export class Card extends React.Component {
  constructor(props) {
    super(props);
    let words = RiTa.tokenize(this.props.title);
    let tags = RiTa.getPosTags(this.props.title);
    this.wordInfo = [];
    tags.forEach((tag, index) => {
      let active = false;
      if (tagCategories.includes(tag)) {
        active = true;
      }
      // console.log(tag);
      this.wordInfo.push({ word: words[index], tag: tag, active: active });
    });
  }

  render() {
    return (
      <Frame style={cardFrame}>
        <Stack
          style={cardPageContainer}
          alignment={"center"}
          key={this.props.index}
        >
          <Stack
            style={{
              borderRadius: 10,
              boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
            }}
            style={textStack}
          >
            <h1>ASDFASDF</h1>
          </Stack>
          <Frame style={heartButtonContainer}>
            {/* <Icon icon={3} style={heartButton} /> */}
          </Frame>
        </Stack>
      </Frame>
    );
  }
}

/*
  render() {
    return (
      <Stack
        size={"80%"}
        width={"80%"}
        radius={10}
        key={this.props.index}
        style={cardStyle}
      >
        {this.wordInfo.map((info, index) => {
          return <HyperBlock index={index} word={info} />;
        })}
      </Stack>
    );
  }
  */
