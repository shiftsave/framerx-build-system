import * as React from "react";
import { SIZE_OPTIONS } from "../../constants/ui-constants";
import "./button.less";
interface ButtonProps {
    /** Size (according to our standard "t-shirt" sizes) */
    size: SIZE_OPTIONS;
    /** Click callback  */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: "default" | "primary" | "success" | "warning" | "danger" | "toggle";
    /** Remove border and background. On hover, `knockout` buttons have a colored background with light text. `naked` buttons don't have a background color. */
    borderless?: "knockout" | "naked";
    /** Fill 100% of container width */
    fullWidth?: boolean;
    /** Apply disabled styling and remove pointer events */
    disabled?: boolean;
    loading?: boolean;
    /** Make the left edge square */
    isLeftLockup?: boolean;
    /** Make the right edge square */
    isRightLockup?: boolean;
    className?: string;
    /**
     * The type of button - defaults to "button" to avoid submitting forms
     * upon click which is the default behavior for a button.
     */
    type?: string;
}
export declare class Button extends React.Component<ButtonProps> {
    static defaultProps: {
        size: SIZE_OPTIONS;
        buttonType: string;
        borderless: any;
        fullWidth: boolean;
        isLeftLockup: boolean;
        isRightLockup: boolean;
        disabled: boolean;
        loading: boolean;
        type: string;
    };
    render(): JSX.Element;
}
export {};
