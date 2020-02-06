import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import MuiBottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Icon } from "./Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";

interface Props {
  showLabels?: boolean;
  icons?: string[];
  labels?: string[];
  width?: number;
  height?: number;
  controls?: object;
}
const useStyles = makeStyles({
  root: {
    background: "transparent",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "100%",
    marginBottom: "20px",
    padding: "0px !important"
  },
  iconRoot: {
    background: "transparent",
    borderRadius: 3,
    border: 0,
    width: "33%",
    height: "100%",
    padding: "0px !important"
  }
});

const defaultProps: Props = {
  showLabels: false,
  labels: [0, 1, 2],
  routes: ["/whatif", "/inventions", "/favourites"],
  width: 500,
  height: "11%"
};

export const BottomNavigationBar: React.SFC<Props> = (props: Props) => {
  const { labels, routes, ...other } = props;
  const classes = useStyles();

  // tslint:disable-next-line: ban-ts-ignore
  // @ts-ignore
  const [value, setValue] = React.useState(0);

  const items = routes.length > labels.length ? icons : labels;
  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log(newValue);
    props.handleChange(event, newValue);
  };
  return (
    <MuiBottomNavigation
      value={value}
      onChange={handleChange}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label // class name, e.g. `classes-nesting-label-x`
      }}
      {...other}
    >
      {items.map(
        (item, index) =>
          (labels[index] !== undefined || icons[index] !== undefined) && (
            <BottomNavigationAction
              value={labels[index]}
              icon={<RestoreIcon />}
            >
              <Link to={routes[index]}>{/* <h1>lalal</h1> */}a</Link>
            </BottomNavigationAction>
          )
      )}
    </MuiBottomNavigation>
  );
};

BottomNavigationBar.defaultProps = defaultProps;

addPropertyControls(BottomNavigationBar, {
  showLabels: {
    type: ControlType.Boolean,
    title: "Show labels"
  },
  icons: {
    type: ControlType.Array,
    title: "Icons",
    propertyControl: { type: ControlType.String }
  },
  labels: {
    type: ControlType.Array,
    title: "Labels",
    propertyControl: { type: ControlType.String }
  }
});
