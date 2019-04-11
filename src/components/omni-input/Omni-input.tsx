import * as React from "react"
import { TextField } from '@rmwc/textfield';
import "./omni-input.scss"

/**
 * Text input properties.
 */
export interface IInputProps {
  /** Text to show over the text input */
  label?: string
  /** Input value */
  value?: string
  /** When the input value is changed */
  onInputChange?: any
  /** Input type */
  type?: any
  /** left icon */
  icon?: string
  /** Right icon */
  trailingIcon?: string
}

/**
 * Text input
 */
export const OmniInput = (props: IInputProps) => {
  const onInputChange = e => {
    props.onInputChange(e.target.value)
  }
  return (
    <div className="omni-input">
      <TextField
        outlined
        label={props.label}
        value={props.value || ""}
        onChange={onInputChange}
        type={props.type}
        icon={props.icon ? {
          icon: props.icon,
          tabIndex: 0,
          onClick: () => console.log("click icon")
        } : null}
        trailingIcon={props.trailingIcon ? {
          icon: props.trailingIcon,
          tabIndex: 0,
          onClick: () => console.log("click trailing icon")
        } : null}
      />
    </div>
  )
}

export default OmniInput
