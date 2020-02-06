// import * as React from "react";
// import { useDoubleClick } from "../../hooks/longPressCallback";

// export class HyperBlock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.countRef = 0;
//   }
//   changebackgroundColor() {}
//   render() {
//     let clicks = [];
//     let timeout;

//     function singleClick(event) {
//       alert("single click");
//     }

//     function doubleClick(event) {
//       alert("doubleClick");
//     }

//     function clickHandler(event) {
//       event.preventDefault();
//       clicks.push(new Date().getTime());
//       window.clearTimeout(timeout);
//       timeout = window.setTimeout(() => {
//         if (
//           clicks.length > 1 &&
//           clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250
//         ) {
//           doubleClick(event.target);
//         } else {
//           singleClick(event.target);
//         }
//       }, 250);
//     }

//     return <span onClick={clickHandler}>click me</span>;
//   }
// }

import * as React from "react";
import { ControlType } from "framer";
import "@material/button/dist/mdc.button.css";
import { MDCRipple } from "@material/ripple";

interface ButtonProps {
  type: string;
  backgroundColor: string;
  icon: string;
  text: string;
  disabled: boolean;
  href: string;
}

export class HyperBlock extends React.Component<ButtonProps> {
  private buttonRef: React.RefObject<HTMLButtonElement>;

  static defaultProps = {
    height: 36,
    type: "mdc-button--raised",
    width: 96,
    icon: "",
    text: "Button",
    disabled: false,
    href: "",
    backgroundColor: "#3388ff"
  };

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    if (this.props.word.active) {
      this.backgroundColor = "#000000";
    } else {
      this.backgroundColor = "#00000000";
    }
  }

  componentDidMount() {
    new MDCRipple(this.buttonRef.current);
  }

  render() {
    return (
      <button
        ref={this.buttonRef}
        style={{
          "--mdc-theme-primary": this.backgroundColor
        }}
        className={"mdc-button " + this.props.type}
        disabled={this.disabled}
      >
        {this.props.word.word}
      </button>
    );
  }
}
