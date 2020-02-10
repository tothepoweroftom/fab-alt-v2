import * as React from "react";
import { Frame, Stack, Page, Color } from "framer";
import { CardDeck } from "../../components/Cards/CardDeck";
import RiTa from "rita";
import axios from "axios";
import {
  whatifCards,
  inventionCards,
  problemCards,
  content
} from "../../styles/AppLayout";

export class WhatIf extends React.Component {
  constructor(props) {
    super(props);
    this.stage = this.props.toolpage;
    console.log("demo", this.stage);
  }

  componentWillMount() {}
  render() {
    return <CardDeck />;
  }
}
