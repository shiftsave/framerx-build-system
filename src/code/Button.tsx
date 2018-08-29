import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Button as _Button } from "../lib";

enum SIZE_OPTIONS {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg"
}

// Define type of property
interface Props {
  buttonType?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "toggle";
  lockup: string;
  isLeftLockup: boolean;
  isRightLockup: boolean;
  size: SIZE_OPTIONS;
  title: string;

  // Define the canvas size
  width: number;
  height: number;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Button",
    size: "md",
    buttonType: "default",
    isLeftLockup: false,
    isRightLockup: false,
    lockup: "[↔]",
    active: false,
    type: "button",
    width: 68,
    height: 28
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    buttonType: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "toggle"],
      title: "Button Type"
    },
    size: {
      type: ControlType.SegmentedEnum,
      options: ["xs", "sm", "md", "lg"],
      title: "Size"
    }
  };

  render() {
    const { title, lockup } = this.props;

    return (
      <_Button
        {...this.props}
        isLeftLockup={lockup === "→]" || (lockup === "|↔|" && true)}
        isRightLockup={lockup === "[←" || (lockup === "|↔|" && true)}
      >
        {title}
      </_Button>
    );
  }
}
