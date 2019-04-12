import * as React from "react"
import { Select } from "@rmwc/select"
import { ListItem } from "@rmwc/list"
import "./omni-select.scss"

/**
 * Selector properties.
 */
export interface ISelectProps {
  /** Text to show over the select */
  label?: string
  /** Select text */
  value?: string
  /** When an item is selected */
  onChange?: any
  /** Items for the list*/
  options?: [any]
  /** If the selector should be disabled */
  disabled?: boolean
  /** If the selector is required */
  required?: boolean
}

/**
 * Selector
 */
export const OmniSelect = (props: ISelectProps) => {
  const onChange = e => {
    props.onChange(e.detail.value)
  }
  return (
    <div className="omni-select">
      <Select
        label={props.label}
        outlined
        enhanced
        onChange={onChange}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
      >
        {/* 
        <option value="" disabled></option>
          {props.options.map((option, idx) => (
            <option value={option.value} key={idx}>{option.label}</option>
          ))}
        */}
        {props.options.map((option, idx) => (
          <ListItem
            key={idx}
            value={option.value}
            activated={option.value === props.value}
            data-value={option.value}
          >
            {option.label}
          </ListItem>
        ))}
      </Select>
    </div>
  )
}

export default OmniSelect
