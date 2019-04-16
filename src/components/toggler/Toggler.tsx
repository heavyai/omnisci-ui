import * as React from "react"

/**
 * Toggler properties.
 */
export interface ITogglerProps {
  /** Renderer for the primary state */
  primaryChildren?: any
  /** Renderer for the secondary state */
  secondaryChildren?: any
  /** If on primary state, otherwise secondary */
  isPrimaryState?: boolean
  /** Boolean when button change state bwteen primary and secondary */
  onChange?: any
}

/**
 * Toggler
 */
export const Toggler = (props: ITogglerProps) => {
  const onChange = () => {
    props.onChange(!props.isPrimaryState)
  }
  return (
    <div
      className={props.isPrimaryState ? "primary-state" : "secondary-state"}
      onClick={onChange}
    >
      {props.isPrimaryState ? 
        props.primaryChildren :
        props.secondaryChildren
      }
    </div>
  )
}

export default Toggler
