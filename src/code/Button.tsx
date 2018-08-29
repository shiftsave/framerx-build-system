import * as React from "react";
import { PropertyControls, ControlType, Stack } from "framer";
import { Button as _Button } from "../lib";

// Define type of property
interface Props {
  title: string;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Button",
    height: 28
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" }
  };

  render() {
    return <_Button {...this.props}>{this.props.title}</_Button>;
  }
}
