import * as React from "react"
import Select from "@material/react-select"
import "./omni-select.scss"

/**
 * Text input properties.
 */
export interface ISelectProps {
  /** Text to show over the text input */
  label?: string
  value?: string
  options?: [any]
  /** When the input value is changed */
  onInputChange?: any
}

/**
 * Text input
 */
export const OmniSelect = (props: ISelectProps) => {
  const onInputChange = e => {
    console.log(e.target, e.target.value)
    props.onInputChange(e.target.value)
  }
  return (
    <div className="omni-select">
      <Select
        label={props.label}
        onChange={onInputChange}
        value={props.value}
        outlined={true}
        className="test"
      >
      <option value="" disabled></option>
      {props.options.map((option, idx) => (
        <option value={option.value} key={idx}>{option.label}</option>
      ))}
      </Select>
    </div>
  )
}

export default OmniSelect
