import * as React from "react"
import * as RMWC from "@rmwc/types"

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
export const Modal = (props: IModalProps) => {
  return <div>{props}</div>
}

export default Modal
