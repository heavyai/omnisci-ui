import * as React from "react"
import { Slider } from "@rmwc/slider"
import "./omni-slider.scss"

/**
 * Toggle properties.
 */
export interface ISliderProps {
  /** Text to show over the toggle */
  label?: string
  /** Text to show over the toggle */
  value?: string
  /** When the toggle changes */
  min?: string
  /** Text to show over the toggle */
  max?: string
  /** Text to show over the toggle */
  step?: string
  /** Text to show over the toggle */
  onInput?: any
}

/**
 * Toggle
 */
export const OmniSlider = (props: ISliderProps) => {
  const onInput = e => {
    props.onInput(e.detail.value)
  }
  return (
    <div className="omni-slider">
      <label htmlFor="slider" className="omni-label">
        {props.label}
      </label>
      <Slider
        className={"slider"}
        onInput={onInput}
        discrete
        min={props.min || 0}
        max={props.max || 100}
        step={props.step || 1}
      />
    </div>
  )
}

export default OmniSlider
