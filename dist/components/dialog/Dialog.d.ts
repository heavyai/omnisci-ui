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
    type?: string;
}
export interface IDialogProps {
    /** Whether or not the Dialog is showing. */
    open: boolean;
    /** Callback for when the Dialog opens. */
    onOpen?: any;
    /** Callback for when the Dialog closes. */
    onClose?: any;
    children?: any;
}
/**
 * Dialog
 */
export declare const SimpleDialog: FunctionComponent<ISimpleDialogProps>;
export declare const SimpleDangerDialog: (props: IDialogProps) => JSX.Element;
export declare const SimpleWarningDialog: (props: IDialogProps) => JSX.Element;
export declare const SimpleSuccessDialog: (props: IDialogProps) => JSX.Element;
export declare const SimpleInfoDialog: (props: IDialogProps) => JSX.Element;
export declare const DangerDialog: (props: IDialogProps) => JSX.Element;
declare const _default: {
    DangerDialog: (props: IDialogProps) => JSX.Element;
    SimpleDangerDialog: (props: IDialogProps) => JSX.Element;
    SimpleWarningDialog: (props: IDialogProps) => JSX.Element;
    SimpleSuccessDialog: (props: IDialogProps) => JSX.Element;
};
export default _default;
