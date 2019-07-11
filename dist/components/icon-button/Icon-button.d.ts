import * as React from "react";
import * as RMWC from "@rmwc/types";
/**
 * Icon button properties.
 */
export interface IIconButtonProps {
    /** Controls the on / off state of the a toggleable button. */
    checked?: boolean;
    /** An onChange callback that receives a custom event. */
    onChange?: (evt: RMWC.CustomEventT<{
        isOn: boolean;
    }>) => void;
    /** Makes the button disabled */
    disabled?: boolean;
    /** Icon for the button */
    icon?: RMWC.IconPropT;
    /** If specified, renders a toggle with this icon as the on state. */
    onIcon?: RMWC.IconPropT;
    /** Content specified as children. */
    children?: React.ReactNode;
}
/**
 * Icon button
 */
export declare const IconButton: (props: IIconButtonProps) => JSX.Element;
export default IconButton;
