import React, { FunctionComponent } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@rmwc/dialog"
import { IconButton } from "@rmwc/icon-button"
import { Icon } from "@rmwc/icon"
import {
  DangerButton,
  WarningButton,
  SuccessButton,
  SecondaryButton,
  PrimaryButton
} from "../button/Button"

/**
 * Dialog properties.
 */
export interface ISimpleDialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean
  /** Callback for when the Dialog opens. */
  onOpen?: any
  /** Callback for when the Dialog closes. */
  onClose?: any
  title?: React.ReactNode | string
  message?: React.ReactNode | string
  primaryLabel?: React.ReactNode | string
  secondaryLabel?: React.ReactNode | string
  type?: string
  hideCloseIcon?: boolean
  onCloseFromHeader?: any
}

export interface IDialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean
  /** Callback for when the Dialog opens. */
  onOpen?: any
  /** Callback for when the Dialog closes. */
  onClose?: any
  children?: any
}

/**
 * Dialog
 */
export const SimpleDialog: FunctionComponent<ISimpleDialogProps> = ({
  primaryLabel,
  secondaryLabel,
  message,
  onClose,
  onOpen,
  title,
  open,
  type,
  hideCloseIcon,
  onCloseFromHeader
}) => {
  const handlePrimary = () => onClose(primaryLabel)
  const handleSecondary = () => onClose(secondaryLabel)
  const handleCloseFromHeader = () => onCloseFromHeader ? onCloseFromHeader() : onClose()

  return (
    <Dialog className={type} open={open} onOpen={onOpen}>
      <DialogTitle>
        {title}
        {!hideCloseIcon && (
          <IconButton icon="close" onClick={handleCloseFromHeader} ripple={false} />
        )}
      </DialogTitle>
      <DialogContent>
        {(type === "warning" || type === "danger") && (
          <Icon icon="warning_outline" />
        )}
        {type === "success" && <Icon icon="check_circle_outline" />}
        {type === "info" && <Icon icon="info_outline" />}
        <div className="dialog-message">{message}</div>
      </DialogContent>
      <DialogActions>
        {secondaryLabel && (
          <SecondaryButton onClick={handleSecondary}>
            {secondaryLabel}
          </SecondaryButton>
        )}
        {
          {
            danger: (
              <DangerButton onClick={handlePrimary}>
                {primaryLabel}
              </DangerButton>
            ),
            warning: (
              <WarningButton onClick={handlePrimary}>
                {primaryLabel}
              </WarningButton>
            ),
            success: (
              <SuccessButton onClick={handlePrimary}>
                {primaryLabel}
              </SuccessButton>
            ),
            info: (
              <PrimaryButton onClick={handlePrimary}>
                {primaryLabel}
              </PrimaryButton>
            )
          }[type]
        }
      </DialogActions>
    </Dialog>
  )
}

export const SimpleDangerDialog = (props: IDialogProps) => (
  <SimpleDialog type={"danger"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const SimpleWarningDialog = (props: IDialogProps) => (
  <SimpleDialog type={"warning"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const SimpleSuccessDialog = (props: IDialogProps) => (
  <SimpleDialog type={"success"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const SimpleInfoDialog = (props: IDialogProps) => (
  <SimpleDialog type={"info"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const DangerDialog = (props: IDialogProps) => (
  <Dialog className={"danger"} {...props}>
    {props.children}
  </Dialog>
)

export const WarningDialog = (props: IDialogProps) => (
  <Dialog className={"warning"} {...props}>
    {props.children}
  </Dialog>
)

export const SuccessDialog = (props: IDialogProps) => (
  <Dialog className={"success"} {...props}>
    {props.children}
  </Dialog>
)

export const InfoDialog = (props: IDialogProps) => (
  <Dialog className={"info"} {...props}>
    {props.children}
  </Dialog>
)

export default {
  DangerDialog,
  WarningDialog,
  SuccessDialog,
  InfoDialog,
  SimpleDangerDialog,
  SimpleWarningDialog,
  SimpleSuccessDialog,
  SimpleInfoDialog
}
