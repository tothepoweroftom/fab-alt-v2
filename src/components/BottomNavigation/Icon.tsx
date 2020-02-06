import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > svg": {
        margin: theme.spacing(2)
      }
    }
  })
);

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Preggo(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g>
        <rect fill="none" height="24" width="24" x="0" />
      </g>
      <g>
        <g>
          <g>
            <path d="M9,4c0-1.11,0.89-2,2-2s2,0.89,2,2s-0.89,2-2,2S9,5.11,9,4z M16,13c-0.01-1.34-0.83-2.51-2-3c0-1.66-1.34-3-3-3 s-3,1.34-3,3v7h2v5h3v-5h3V13z" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

function Cloud(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </SvgIcon>
  );
}

export const Icon: React.SFC<Props> = (props: Props) => {
  if (props.icon == 0) {
    return <Cloud />;
  } else if (props.icon == 1) {
    return <HomeIcon />;
  } else {
    return <Cloud />;
  }
};
