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
  /** Textarea version, multirows, char count, ful width */
  isTextarea?: boolean
  /** Disabled */
  isDisabled?: boolean
  /** Disabled */
  isInvalid?: boolean
}

/**
 * Text input
 */
export const OmniInput = (props: IInputProps) => {
  const onInputChange = e => {
    props.onInputChange(e.target.value)
  }

  const textareaProps =  {
    textarea: true,
    fullwidth: true,
    rows: 8
  }

  return (
    <div className="omni-input">
      <TextField
        outlined
        disabled={props.isDisabled}
        invalid={props.isInvalid}
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

        {...(props.isTextarea ? textareaProps : {})}
      />
    </div>
  )
}

export default OmniInput
