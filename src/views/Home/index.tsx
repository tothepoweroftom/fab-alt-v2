import * as React from "react";
import { motion } from "framer-motion";
import { Frame } from "framer";
import { home } from "../../styles/AppLayout";
import { Switch, Route, Link } from "react-router-dom";
import "../../styles/main.css";
export const Home = () => (
  <Frame {...home}>
    <h1>Home</h1>
    <Link to="/whatif">demo</Link>
  </Frame>
);
