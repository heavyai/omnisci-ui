import * as React from "react"
import "./operator-selector.scss"

export const operatorArgs = {
  between: ["min", "max"],
  "less than": ["max"],
  "greater than": ["min"],
  equals: ["min"],
  "not between": ["min", "max"]
}

const operatorLabels = Object.keys(operatorArgs)

/**
 * Operator Selector properties.
 */
export interface IOperatorSelectorProps {
  /** Operator min value */
  min?: number
  /** Operator max value */
  max?: number
  /** Selected operator */
  operator?: string
  /** If menu should be open */
  menuIsOpen?: boolean
  /** When menu is clicked open */
  onMenuClick?: any
  /** When a menu item is selected */
  onMenuSelect?: any
  /** When a min or max input is changed */
  onInputChange?: any
}

/**
 * Operator Selector
 */
export const OperatorSelector = (props: IOperatorSelectorProps) => {
  const onInputChange = minOrMax => e => {
    props.onInputChange(minOrMax, e.target.value)
  }

  const operator = props.operator || operatorLabels[0]

  return (
    <div className="operator-selector">
      {props.menuIsOpen ? (
        <div className="operator-menu">
          {operatorLabels.map((operatorLabel, i) => (
            <div
              key={i}
              className="operator-item"
              onClick={props.onMenuSelect(operatorLabel)}
            >
              {operatorLabel}
            </div>
          ))}
        </div>
      ) : (
        <div className="operator" onClick={props.onMenuClick}>
          <div className="label">{operator}</div>
          <div className="arrow">▾</div>
        </div>
      )}
      {operatorArgs[operator].includes("min") && (
        <div className="min-input">
          <input
            type="text"
            value={props.min || 0}
            onChange={onInputChange("min")}
          />
        </div>
      )}
      {operatorArgs[operator].includes("min") &&
        operatorArgs[operator].includes("max") && (
          <div className="between-label">and</div>
        )}
      {operatorArgs[operator].includes("max") && (
        <div className="max-input">
          <input
            type="text"
            value={props.max || 1}
            onChange={onInputChange("max")}
          />
        </div>
      )}
    </div>
  )
}

export default OperatorSelector
