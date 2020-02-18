import * as React from "react"
import Select, { components } from "react-select"
import FloatingLabel from "@material/react-floating-label"
import cx from "classnames"
import "@material/react-floating-label/index.scss"
import "../../vars.scss"

export interface IMultiSelectProps {
  options?: any
  value?: any
  /** When the input changes */
  onChange?: any
  hasError?: boolean
  isRequired?: boolean
  noLabel?: boolean
  className?: string
}

export class MultiSelect extends React.PureComponent<IMultiSelectProps, {}> {
  private SelectContainer = ({ children, ...childProps }) => (
    <components.SelectContainer {...childProps}>
      <span className="select-container-wrapper">{children}</span>
        <FloatingLabel
          className={cx("floating-label", {
            "no-label": childProps.selectProps.noLabel
          })}
          float={childProps.hasValue || childProps.selectProps.inputValue}
        >
          {childProps.selectProps.placeholder}
        </FloatingLabel>
    </components.SelectContainer>
  )

  private Placeholder = () => null

  render() {
    const {
      className, 
      hasError,
      isRequired,
      ...otherProps
    } = this.props
    return (
      <Select
        className={cx("multi-select", className, {
          error: hasError,
          required: isRequired
        })}
        classNamePrefix={"select"}
        components={{
          SelectContainer: this.SelectContainer,
          Placeholder: this.Placeholder
        }}
        {...otherProps}
      />
    )
  }
}

export default MultiSelect
