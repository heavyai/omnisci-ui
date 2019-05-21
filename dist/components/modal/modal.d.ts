/// <reference types="react" />
import * as RMWC from "@rmwc/types";
/**
 * Modal properties.
 */
export interface IModalProps {
    /** Whether or not the Dialog is showing. */
    open?: boolean;
    /** Callback for when the Dialog opens. */
    onOpen?: (evt: RMWC.CustomEventT<{}>) => void;
    /** Callback for when the Dialog closes. */
    onClose?: (evt: RMWC.CustomEventT<{
        action?: string;
    }>) => void;
}
/**
 * modal
 */
export declare const Modal: (props: IModalProps) => JSX.Element;
export default Modal;
