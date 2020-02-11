import * as React from "react";
import { Frame, Page, transform, Color } from "framer";
import { Card } from "./Card";
import { LottieAnim } from "../../components/Lottie";
const pages = ["1", "2", "3"];
const pageStyle = {
  overflow: "visible",
  marginTop: "5%",
  backgroundColor: "transparent"
};

const cardStyle = {
  borderRadius: 10,
  // width: "95%",
  backgroundColor: "transparent",

  boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
};
export class HelpCarousel extends React.Component {
  render() {
    return (
      <Page
        style={pageStyle}
        width={"100%"}
        height={"100%"}
        overflow={"visible"}
        background={"transparent"}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {pages.map((title, index) => {
          return (
            <Frame style={cardStyle}>
              <LottieAnim />
            </Frame>
          );
        })}
      </Page>
    );
  }
}
