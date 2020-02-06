import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import { Frame } from "framer";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > svg": {
        margin: theme.spacing(2)
      }
    }
  })
);

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
};

const frame = {
  backgroundColor: "transparent",
  width: "100%",
  height: "50%"
};

const LightBulbFrame = {
  backgroundColor: "transparent",
  bottom: 20,
  opacity: 0.5,
  right: 20,
  size: "50px"

  // height: "50%"
};
function LightBulb(props: SvgIconProps) {
  return (
    <Frame whileTap={{ scale: 0.8, opacity: 1 }} {...LightBulbFrame}>
      <SvgIcon viewBox={"0 0 50 50"} style={{ fontSize: 70 }}>
        <path
          d="M 8.125 0.087 C 12.612 0.087 16.25 3.724 16.25 8.212 C 16.25 10.542 15.269 12.643 13.697 14.125 L 13.75 14.125 L 10 19.125 L 6.25 19.125 L 2.5 14.125 L 2.553 14.125 C 0.981 12.643 0 10.542 0 8.212 C 0 3.724 3.638 0.087 8.125 0.087 Z"
          fill="hsl(0, 0%, 100%)"
        />
        <path
          d="M 5 20.087 C 5 19.396 5.56 18.837 6.25 18.837 L 10 18.837 C 10.69 18.837 11.25 19.396 11.25 20.087 L 11.25 22.587 C 11.25 23.277 10.69 23.837 10 23.837 C 10 24.527 9.44 25.087 8.75 25.087 L 7.5 25.087 C 6.81 25.087 6.25 24.527 6.25 23.837 C 5.56 23.837 5 23.277 5 22.587 Z"
          fill="hsl(0, 0%, 20%)"
        />
      </SvgIcon>
    </Frame>
  );
}
function WhatIfIcon(props: SvgIconProps) {
  return (
    <Frame whileTap={{ scale: 0.8 }} {...frame}>
      <SvgIcon
        {...props}
        viewBox={"0 0 60 60"}
        style={{ fontSize: 40 + window.innerWidth * 0.03 }}
      >
        <path
          d="M 33.5 12 C 45.374 12 55 21.626 55 33.5 C 55 45.374 45.374 55 33.5 55 C 21.626 55 12 45.374 12 33.5 C 12 21.626 21.626 12 33.5 12 Z"
          fill="#FFFFA2"
        />
        <path
          d="M 24.364 34.039 L 29.818 34.039 C 29.968 34.039 30.116 34.047 30.262 34.062 C 31.099 32.123 33.027 30.767 35.273 30.767 C 38.285 30.767 40.727 33.209 40.727 36.221 C 40.727 36.595 40.69 36.96 40.618 37.312 L 41.273 37.312 C 42.779 37.312 44 38.533 44 40.039 C 44 41.546 42.779 42.767 41.273 42.767 L 24.364 42.767 C 21.954 42.767 20 40.813 20 38.403 C 20 35.993 21.954 34.039 24.364 34.039 Z"
          fill="hsl(60, 80%, 70%)"
        />
        <path
          d="M 35 21 C 37.46 21 39.505 22.776 39.922 25.116 C 40.269 25.04 40.63 25 41 25 C 43.761 25 46 27.239 46 30 C 46 30.342 45.966 30.677 45.9 31 L 46.5 31 C 47.881 31 49 32.119 49 33.5 C 49 34.318 48.607 35.045 47.999 35.501 L 43 40.5 L 37.667 36 L 32.5 36 C 31.119 36 30 34.881 30 33.5 C 30 32.346 30.781 31.375 31.844 31.087 L 27 27 L 30.999 23.001 C 31.911 21.786 33.364 21 35 21 Z"
          fill="hsl(60, 61%, 67%)"
        />
        <path
          d="M 41.5 36 C 42.881 36 44 37.119 44 38.5 C 44 39.881 42.881 41 41.5 41 L 26 41 C 23.791 41 22 39.209 22 37 C 22 34.983 23.493 33.315 25.434 33.04 C 25.155 32.417 25 31.727 25 31 C 25 28.239 27.239 26 30 26 C 32.46 26 34.505 27.776 34.922 30.116 C 34.948 30.111 34.974 30.105 35 30.1 C 35.323 30.034 35.658 30 36 30 C 38.761 30 41 32.239 41 35 C 41 35.342 40.966 35.677 40.9 36 Z"
          fill="hsl(0, 0%, 100%)"
        />
      </SvgIcon>
    </Frame>
  );
}

function InventionIcon(props: SvgIconProps) {
  return (
    <Frame whileTap={{ scale: 0.8 }} {...frame}>
      <SvgIcon
        {...props}
        viewBox={"0 0 60 60"}
        style={{ fontSize: 40 + window.innerWidth * 0.03 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67">
          <path
            d="M 33.5 12 C 45.374 12 55 21.626 55 33.5 C 55 45.374 45.374 55 33.5 55 C 21.626 55 12 45.374 12 33.5 C 12 21.626 21.626 12 33.5 12 Z"
            fill="#FF5131"
          />
          <path
            d="M 24 29 L 38 29 L 38 43 L 24 43 Z"
            fill="hsl(9, 100%, 71%)"
          />
          <path d="M 38 29 L 45 23 L 45 37 L 38 43 Z" fill="hsl(9, 71%, 43%)" />
          <path d="M 24 29 L 31 23 L 45 23 L 38 29 Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </SvgIcon>
    </Frame>
  );
}

function FavouriteIcon(props: SvgIconProps) {
  return (
    <Frame whileTap={{ scale: 0.8 }} {...frame}>
      <SvgIcon
        {...props}
        viewBox={"0 0 60 60"}
        style={{ fontSize: 40 + window.innerWidth * 0.03 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67">
          <path
            d="M 33.5 12 C 45.374 12 55 21.626 55 33.5 C 55 45.374 45.374 55 33.5 55 C 21.626 55 12 45.374 12 33.5 C 12 21.626 21.626 12 33.5 12 Z"
            fill="#768FFF"
          />
          <path d="M -248.5 -190.5" fill="transparent" stroke="#AAA" />
          <path
            d="M 33.5 24.269 C 37.09 24.269 40 27.179 40 30.769 C 40 32.634 39.215 34.315 37.958 35.5 L 38 35.5 L 35 39.5 L 32 39.5 L 29 35.5 L 29.042 35.5 C 27.785 34.315 27 32.634 27 30.769 C 27 27.179 29.91 24.269 33.5 24.269 Z"
            fill="hsl(0, 0%, 100%)"
          />
          <path
            d="M 31 40 C 31 39.448 31.448 39 32 39 L 35 39 C 35.552 39 36 39.448 36 40 L 36 42 C 36 42.552 35.552 43 35 43 C 35 43.552 34.552 44 34 44 L 33 44 C 32.448 44 32 43.552 32 43 C 31.448 43 31 42.552 31 42 Z"
            fill="hsl(0, 0%, 20%)"
          />
        </svg>
      </SvgIcon>
    </Frame>
  );
}

export const Icon: React.SFC<Props> = (props: Props) => {
  if (props.icon == 0) {
    return <WhatIfIcon />;
  } else if (props.icon == 1) {
    return <InventionIcon />;
  } else if (props.icon == 2) {
    return <FavouriteIcon />;
  } else if (props.icon == 3) {
    return <LightBulb />;
  }
};
