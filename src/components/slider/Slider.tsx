import * as React from "react"
import * as RMWC from "@rmwc/types"

/**
 * Slider properties.
 */
export interface ISliderProps {
  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. */
  onChange?: (
    evt: RMWC.CustomEventT<{
      value: number
    }>
  ) => void
  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. */
  onInput?: (
    evt: RMWC.CustomEventT<{
      value: number
    }>
  ) => void
  /** The value of the Slider. */
  value?: number | string
  /** The minimum value of the Slider. */
  min?: number | string
  /** The maximum value of the Slider. */
  max?: number | string
  /** A step to quantize values by. */
  step?: number | string
  /** Displays the exact value of the Slider on the knob. */
  discrete?: boolean
  /** Displays the individual step markers on the Slider track. */
  displayMarkers?: boolean
  /** Disables the control. */
  disabled?: boolean
}

/**
 * Slider
 */
export const Slider = (props: ISliderProps) => <div>{props}</div>

export default Slider
