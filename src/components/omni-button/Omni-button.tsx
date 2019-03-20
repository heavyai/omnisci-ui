import * as React from "react";
import Button from "@material/react-button";
import "./react-button.scss";

/**
 * Button properties.
 */
export interface IButtonProps {
    /** Text to show on the button */
    label?: string;
}

/**
 * Button
 */
const OmniButton = (props: IButtonProps) => {
    return <Button className="omni-button" {...props}>{ props.label }</Button>;
};

export default OmniButton