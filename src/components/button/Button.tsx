import * as React from "react"
import "../../index.scss";

/**
 * Button properties.
 */
export interface IButtonProps {
  /** Make the button unelevated. */
  unelevated?: boolean
  /** Make the button outlined. */
  outlined?: boolean
  /** Make the button disabled */
  disabled?: boolean
  /** Content specified as a label prop. */
  label?: React.ReactNode | any
  /** Content specified as children. */
  children?: React.ReactNode
  /** An Icon for the Button */
  icon?: any
}

/**
 * button
 */
export const Button = (props: IButtonProps) => {
  return <div>{props}</div>
}

export default Button
