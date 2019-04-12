import * as React from "react"
import { IconButton } from "@rmwc/icon-button"
import "./omni-toggle-icon.scss"

/**
 * Toggle button properties.
 */
export interface IToggleIconProps {
  /** Text to show on the button */
  iconOn?: string
  iconOff?: string
}

/**
 * toggle button
 */
export const OmniToggleIcon = (props: IToggleIconProps) => {
  return (
    <div className="omni-toggle-icon">
      <IconButton icon={props.iconOff} onIcon={props.iconOn} />
    </div>
  )
}

export default OmniToggleIcon
