import * as React from "react"

/**
 * Icon button properties.
 */
export interface IIconButtonProps {
  /** Controls the on / off state of the a toggleable button. */
  checked?: boolean
  /** An onChange callback that receives a custom event. */
  onChange?: any
  /** Makes the button disabled */
  disabled?: boolean
  /** Icon for the button */
  icon?: any
  /** If specified, renders a toggle with this icon as the on state. */
  onIcon?: any
}

/**
 * Icon button
 */
export const IconButton = (props: IIconButtonProps) => {
  return <div>{props}</div>
}

export default IconButton
