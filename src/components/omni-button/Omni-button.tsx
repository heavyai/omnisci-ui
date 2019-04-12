import * as React from "react"
import { Button } from "@rmwc/button"
import "./omni-button.scss"

/**
 * Button properties.
 */
export interface IButtonProps {
  /** Text to show on the button */
  label?: string
  isOutlined?: boolean
  isDisabled?: boolean
}

/**
 * button
 */
export const OmniButton = (props: IButtonProps) => {
  return (
    <div className="omni-button">
      <Button
        unelevated={!props.isOutlined}
        outlined={props.isOutlined}
        disabled={props.isDisabled}
        label={props.label}
      />
    </div>
  )
}

export default OmniButton
