import * as React from "react";
import { Frame, Page, transform, Color } from "framer";
import { Card } from "./Card";
import { LottieAnim } from "../../components/Lottie";
const pages = ["1", "2", "3"];

export class HelpCarousel extends React.Component {
  render() {
    return (
      <Page
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {pages.map((title, index) => {
          return <LottieAnim />;
        })}
      </Page>
    );
  }
}
