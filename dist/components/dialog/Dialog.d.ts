import React, { FunctionComponent } from "react";
/**
 * Dialog properties.
 */
export interface ISimpleDialogProps {
    /** Whether or not the Dialog is showing. */
    open?: boolean;
    /** Callback for when the Dialog opens. */
    onOpen?: any;
    /** Callback for when the Dialog closes. */
    onClose?: any;
    title?: React.ReactNode | string;
    message?: React.ReactNode | string;
    primaryLabel?: React.ReactNode | string;
    secondaryLabel?: React.ReactNode | string;
}
export interface IDialogProps {
    /** Whether or not the Dialog is showing. */
    open?: boolean;
    /** Callback for when the Dialog opens. */
    onOpen?: any;
    /** Callback for when the Dialog closes. */
    onClose?: any;
    children?: any;
}
/**
 * Dialog
 */
export declare const SimpleDangerDialog: FunctionComponent<ISimpleDialogProps>;
export declare const DangerDialog: (props: IDialogProps) => JSX.Element;
declare const _default: {
    DangerDialog: (props: IDialogProps) => JSX.Element;
    SimpleDangerDialog: React.FunctionComponent<ISimpleDialogProps>;
};
export default _default;
