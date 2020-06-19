import * as React from "react"
import * as RMWC from "@rmwc/types"
import { Button as RMWCButton } from "@rmwc/button"

/**
 * Button properties.
 */
export interface IButtonProps {
  /** Make the button disabled */
  disabled?: boolean
  /** Content specified as a label prop. */
  label?: React.ReactNode | any
  /** Content specified as children. */
  children?: React.ReactNode
  /** An Icon for the Button */
  icon?: RMWC.IconPropT
  className?: string
  onClick: any
}

/**
 * button
 */

export const PrimaryButton = (props: IButtonProps) => (
  <RMWCButton unelevated ripple={false} {...props}>
    {props.children}
  </RMWCButton>
)

export const SecondaryButton = (props: IButtonProps) => (
  <RMWCButton outlined ripple={false} {...props}>
    {props.children}
  </RMWCButton>
)

export const DangerButton = (props: IButtonProps) => (
  <PrimaryButton className={"danger"} {...props}>
    {props.children}
  </PrimaryButton>
)

export const WarningButton = (props: IButtonProps) => (
  <PrimaryButton className={"warning"} {...props}>
    {props.children}
  </PrimaryButton>
)

export const InfoButton = (props: IButtonProps) => (
  <PrimaryButton className={"info"} {...props}>
    {props.children}
  </PrimaryButton>
)

export const SuccessButton = (props: IButtonProps) => (
  <PrimaryButton className={"success"} {...props}>
    {props.children}
  </PrimaryButton>
)

export default {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  WarningButton,
  InfoButton,
  SuccessButton,
}
