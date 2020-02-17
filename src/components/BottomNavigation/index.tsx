import * as React from "react";
import { Stack, Frame } from "framer";

import { Icon } from "../Icons";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

const defaultProps: Props = {
  showLabels: false,
  labels: [0, 1, 2],
  routes: ["/whatif", "/inventions", "/favourites"],
  width: 500,
  height: "11%"
};
const stackLayout = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "flex-end",
  overflow: "hidden",
  backgroundColor: "transparent"
};

const buttonFrame = {
  flex: 1,
  top: "25%",
  // padding: "0px 40px",
  padding: "0px !important",
  width: "1fr",
  height: "100%",
  overflow: "hidden",
  backgroundColor: "transparent"
};

export const BottomNavigationBar: React.SFC<Props> = (props: Props) => {
  const { labels, routes, ...other } = props;

  // tslint:disable-next-line: ban-ts-ignore
  // @ts-ignore
  const [value, setValue] = React.useState(0);

  const items = routes.length > labels.length ? icons : labels;
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);
  };
  return (
    <Stack style={stackLayout}>
      <Frame
        style={buttonFrame}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          handleChange({}, 0);
        }}
      >
        <Link to="/whatif">
          <Icon icon={0} />
        </Link>
      </Frame>
      <Frame
        style={buttonFrame}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          handleChange({}, 1);
        }}
      >
        <Link to="/inventions">
          <Icon icon={1} />
        </Link>
      </Frame>
      <Frame
        style={buttonFrame}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          handleChange({}, 2);
        }}
      >
        <Link to="/favourites">
          <Icon icon={2} />
        </Link>
      </Frame>
    </Stack>
  );
};

BottomNavigationBar.defaultProps = defaultProps;
