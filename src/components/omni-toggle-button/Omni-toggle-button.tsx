import * as React from "react"
import { Button } from "@rmwc/button"
import "./omni-toggle-button.scss"

/**
 * Button properties.
 */
export interface IToggleButtonProps {
  /** Text to show on the button */
  primaryLabel?: string
  secondaryLabel?: string
  isOutlined?: boolean
  isDisabled?: boolean
  isPrimaryState?: boolean
  onChange?: any
}

/**
 * button
 */
export const OmniToggleButton = (props: IToggleButtonProps) => {
  const onChange = () => {
    props.onChange(!props.isPrimaryState)
  }
  return (
    <div className="omni-toggle-button">
      <Button
        className={props.isPrimaryState ? "primary-state" : "secondary-state"}
        unelevated={!props.isOutlined}
        outlined={props.isOutlined}
        disabled={props.isDisabled}
        label={props.isPrimaryState ? props.primaryLabel : props.secondaryLabel}
        onClick={onChange}
      />
    </div>
  )
}

export default OmniToggleButton
