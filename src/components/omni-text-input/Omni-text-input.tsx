import * as React from "react"
import TextField, { HelperText, Input } from "@material/react-text-field"
import "./omni-text-input.scss"

/**
 * Text input properties.
 */
export interface ITextInputProps {
  /** Text to show over the text input */
  label?: string
  tip?: string
  value?: string
  /** When the input value is changed */
  onInputChange?: any
}

/**
 * Text input
 */
export const OmniTextInput = (props: ITextInputProps) => {
  const onInputChange = e => {
    props.onInputChange(e.target.value)
  }
  return (
    <div className="omni-text-input">
      <TextField
        outlined={true}
        label={props.label}
        helperText={<HelperText>{props.tip}</HelperText>}
      >
        <Input value={props.value || ""} onChange={onInputChange} />
      </TextField>
    </div>
  )
}

export default OmniTextInput
