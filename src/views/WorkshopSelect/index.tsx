import * as React from "react";
import { motion } from "framer-motion";
import { Frame } from "framer";
import { home } from "../../styles/AppLayout";
import { Switch, Route, Link } from "react-router-dom";
import firebase from "./firebase.js"; // <--- add this line

import "../../styles/main.css";

export function WorkshopSelect(props) {
  return (
    <Frame {...home}>
      <h2> Workshop Select</h2>
    </Frame>
  );
}
