import * as React from "react";
import { motion } from "framer-motion";
import { Frame } from "framer";
import { home } from "../../styles/AppLayout";
import { Switch, Route, Link } from "react-router-dom";
import "../../styles/main.css";
export const Home = props => (
  <Frame {...home}>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/setup" onClick={props.handler(0)}>
          Start New Workshop
        </Link>
      </li>
      <li>
        <Link to="/whatif" onClick={props.handler(1)}>
          demo
        </Link>
      </li>
    </ul>
  </Frame>
);
