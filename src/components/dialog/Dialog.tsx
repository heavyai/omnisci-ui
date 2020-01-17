import React, { FunctionComponent } from "react"
import classNames from 'classnames'
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
  primaryAction?(): void
  secondaryAction?(): void
  type?: string
  hideCloseIcon?: boolean
  onCloseFromHeader?: any
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: any
  onStateChange?: any
  preventOutsideDismiss?: any
  actionToApplyOnEnter?: any
}

export interface IDialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean
  /** Callback for when the Dialog opens. */
  onOpen?: any
  /** Callback for when the Dialog closes. */
  onClose?: any
  children?: React.ReactNode
}

/**
 * Dialog
 */
export const SimpleDialog: FunctionComponent<ISimpleDialogProps> = ({
  primaryLabel="Ok",
  secondaryLabel="Cancel",
  primaryAction=()=>{},
  secondaryAction=()=>{},
  message,
  onClose=()=>{},
  onOpen=()=>{},
  title,
  open,
  type,
  hideCloseIcon,
  onCloseFromHeader,
  children,
  footer,
  className,
  onStateChange,
  preventOutsideDismiss,
  actionToApplyOnEnter
}) => {
  const handlePrimary = () => {
    primaryAction()
    onClose()
  }

  const handleSecondary = () => {
    secondaryAction()
    onClose()
  }

  /* eslint-disable no-confusing-arrow */
  const handleCloseFromHeader = () =>
    onCloseFromHeader ? onCloseFromHeader() : onClose("from header")

  return (
    <Dialog
      className={classNames(type, className)}
      open={open}
      onOpen={onOpen}
      onStateChange={e => {
        if (onStateChange) {
          onStateChange(e)
        }
        if (open && e === "closing") {
          onClose("from state change")
        }
      }}
      preventOutsideDismiss={preventOutsideDismiss}
    >
      <DialogTitle>
        {title}
        {!hideCloseIcon && (
          <IconButton
            icon="close"
            onClick={handleCloseFromHeader}
            ripple={false}
          />
        )}
      </DialogTitle>
      <DialogContent>
        {children ?
          children : (<>
            <div className="message-icon">
              {(type === "warning" || type === "danger") && (
                <Icon icon="warning_outline" />
              )}
              {type === "success" && <Icon icon="check_circle_outline" />}
              {type === "info" && <Icon icon="info_outline" />}
            </div>
            <div className="dialog-message">{message}</div>
          </>)
        }
      </DialogContent>
      <DialogActions>
        {footer || (
          <>
            { secondaryLabel && (
              <SecondaryButton onClick={handleSecondary}>
                {secondaryLabel}
              </SecondaryButton>
            ) }
            { !type && (
              <PrimaryButton onClick={handlePrimary}>
                {primaryLabel}
              </PrimaryButton>
            ) }

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
          </>
        )}
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
  SimpleDialog,
  DangerDialog,
  WarningDialog,
  SuccessDialog,
  InfoDialog,
  SimpleDangerDialog,
  SimpleWarningDialog,
  SimpleSuccessDialog,
  SimpleInfoDialog
}
