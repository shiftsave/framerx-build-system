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
  size: SIZE_OPTIONS;
  title: string;

  // Width and height of the component when loaded in the canvas
  width: number;
  height: number;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Button",
    size: "md",
    buttonType: "default",
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
    return <_Button {...this.props}>{this.props.title}</_Button>;
  }
}
