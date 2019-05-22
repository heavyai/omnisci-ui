import * as React from "react";
import * as RMWC from "@rmwc/types";
/**
 * Button properties.
 */
export interface IButtonProps {
    /** Make the button disabled */
    disabled?: boolean;
    /** Content specified as a label prop. */
    label?: React.ReactNode | any;
    /** Content specified as children. */
    children?: React.ReactNode;
    /** An Icon for the Button */
    icon?: RMWC.IconPropT;
    /** A trailing icon for the Button */
    trailingIcon?: RMWC.IconPropT;
    className?: string;
    onClick: any;
}
/**
 * button
 */
export declare const PrimaryButton: (props: IButtonProps) => JSX.Element;
export declare const SecondaryButton: (props: IButtonProps) => JSX.Element;
export declare const DangerButton: (props: IButtonProps) => JSX.Element;
export declare const WarningButton: (props: IButtonProps) => JSX.Element;
export declare const InfoButton: (props: IButtonProps) => JSX.Element;
export declare const SuccessButton: (props: IButtonProps) => JSX.Element;
declare const _default: {
    PrimaryButton: (props: IButtonProps) => JSX.Element;
    SecondaryButton: (props: IButtonProps) => JSX.Element;
    DangerButton: (props: IButtonProps) => JSX.Element;
    WarningButton: (props: IButtonProps) => JSX.Element;
    InfoButton: (props: IButtonProps) => JSX.Element;
    SuccessButton: (props: IButtonProps) => JSX.Element;
};
export default _default;
