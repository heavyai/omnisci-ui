import * as React from "react"
import { Switch } from '@rmwc/switch';
import "./omni-toggle.scss"

/**
 * Toggle properties.
 */
export interface IToggleProps {
  /** Text to show over the toggle */
  label?: string
  /** If the toggle is on or off */
  isChecked?: boolean
  /** When the toggle changes */
  onChange?: any
}

/**
 * Toggle
 */
export const OmniToggle = (props: IToggleProps) => {
  const onChange = e => {
    props.onChange(e.target.checked)
  }
  return (
    <div className="omni-toggle">
      <label htmlFor="switch" className="omni-label">
        {props.label}
      </label>
      <Switch
        className="switch"
        checked={props.isChecked}
        onChange={onChange}
      />
    </div>
  )
}

export default OmniToggle
