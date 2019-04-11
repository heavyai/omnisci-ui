import * as React from "react"
import { Button } from '@rmwc/button';
import "./omni-button.scss"

/**
 * Button properties.
 */
export interface IButtonProps {
  /** Text to show on the button */
  label?: string
}

/**
 * button
 */
export const OmniButton= (props: IButtonProps) => {
  return (
    <div className="omni-button">
      <Button label={props.label} />
    </div>
  )
}

export default OmniButton
