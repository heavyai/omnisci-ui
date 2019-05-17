import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";
import { IconButton } from "@rmwc/icon-button";
import { Icon } from "@rmwc/icon";
import { DangerButton, SecondaryButton } from "../button/Button"

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
  message?: any;
  primaryLabel?: React.ReactNode | any
  secondaryLabel?: React.ReactNode | any
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
export const SimpleDangerDialog = (props: ISimpleDialogProps) => {
  const {primaryLabel, secondaryLabel, message, onClose, ...topLevelProps} = props
  return (
    <Dialog
      className={"danger"}
      {...topLevelProps}
    >
      <DialogTitle>
        Dialog title
        <IconButton
          icon="close"
          onClick={onClose}
        />
      </DialogTitle>
      <DialogContent>
          <Icon icon="warning_outline"/>
        <div className="dialog-message">
          {message}
        </div>
      </DialogContent>
      <DialogActions>
        <SecondaryButton
          onClick={() => onClose("cancel")}
        >
          {secondaryLabel}
        </SecondaryButton>
        <DangerButton
          onClick={() => onClose("accept")}
        >
          {primaryLabel}
        </DangerButton>
      </DialogActions>
    </Dialog>
  )
}


export const DangerDialog = (props: IDialogProps) => {
  return (
    <Dialog
      className={"danger"}
      {...props}
    >
      {props.children}
    </Dialog>
  )
}

export default {
  DangerDialog,
  SimpleDangerDialog
}
