import * as React from "react";
import { Frame, Page, transform, Color } from "framer";
import { Card } from "./Card";
const pages = ["One", "Two", "Three", "Four"];

const style = {
  fontSize: 32,
  fontWeight: 800,
  width: "90vw",
  color: "#000",
  // height: "100%",
  zIndex: "123123"
};

const pageStyle = {
  borderRadius: 20

  // height: "98%"
};
const blue = Color("#00000005");
const text = Color("#000000");
const textNone = Color("#00000000");

const darkBlue = Color("#00000050");
const shadowCard = "0px 7px 7px 0px rgba(0, 0, 0, 0.25)";
const noShadowCard = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";

export class CardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.color = this.props.color ? Color(this.props.color) : blue;
    this.dark = this.props.color ? Color.darken(this.color, 100) : darkBlue;
  }
  render() {
    return (
      <Page
        width={"100%"}
        height={"100%"}
        overflow={"visible"}
        style={pageStyle}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.5 }}
        // gap={-50}
        effect={info => {
          const offset = info.normalizedOffset;

          const background = transform(
            offset,
            [-1, 0, 1],
            [this.dark, this.color, this.dark]
          );
          const color = transform(
            offset,
            [-1, 0, 1],
            [textNone, text, textNone]
          );

          const scaleY = transform(offset, [-1, 0, 1], [0.85, 1, 0.85]);
          const borderRadius = transform(offset, [-1, 0, 1], [20, 20, 20]);
          const boxShadow = transform(
            offset,
            [-1, 0, 1],
            [noShadowCard, shadowCard, noShadowCard]
          );

          return {
            color,
            background,
            borderRadius,
            scaleY,
            boxShadow
          };
        }}
      >
        {pages.map((title, index) => {
          return <Card title={title} />;
        })}
      </Page>
    );
  }
}
