import * as React from "react"
import * as RMWC from "@rmwc/types"

/**
 * Input properties.
 */
export interface IInputProps {
  /** Sets the value for controlled TextFields. */
  value?: string | number
  /** Makes the TextField visually invalid. This is sometimes automatically applied in cases where required or pattern is used.  */
  invalid?: boolean
  /** Makes the Textfield disabled.  */
  disabled?: boolean
  /** Makes the Textfield required.  */
  required?: boolean
  /** Outline the TextField */
  outlined?: boolean
  /** A label for the input. */
  label?: React.ReactNode
  /** Makes a multiline TextField. */
  textarea?: boolean
  /** Makes the TextField fullwidth. */
  fullwidth?: boolean
  /** Add a leading icon. */
  icon?: RMWC.IconPropT
  /** Add a trailing icon. */
  trailingIcon?: RMWC.IconPropT
  /** The type of input field to render, search, number, etc */
  type?: string
  /** A callback that fires when the input blurs which takes an event with event.detail.value. */
  onChange?: (
    evt: RMWC.CustomEventT<{
      value: number
    }>
  ) => void
  /** A callback that fires continuously while the input is changed that takes an event with event.detail.value. */
  onInput?: (
    evt: RMWC.CustomEventT<{
      value: number
    }>
  ) => void
}

/**
 * Input
 */
export const Input = (props: IInputProps) => <div>{props}</div>

export default Input
