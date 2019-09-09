import * as React from "react"
import Select, { components } from "react-select"
import FloatingLabel from "@material/react-floating-label"
import cx from "classnames"
import "@material/react-floating-label/index.scss"
import "../../vars.scss"

export interface IMultiSelectProps {
  label?: string
  options?: any
  value?: any
  /** When the input changes */
  onChange?: any
  hasError?: boolean
  isRequired?: boolean
}

export class MultiSelect extends React.PureComponent<IMultiSelectProps, {}> {
  private SelectContainer = ({ children, ...childProps }) => (
    <components.SelectContainer {...childProps}>
      <span className="select-container-wrapper">{children}</span>
      <FloatingLabel
        className={"floating-label"}
        float={childProps.hasValue || childProps.selectProps.inputValue}
      >
        {childProps.selectProps.placeholder}
      </FloatingLabel>
    </components.SelectContainer>
  )

  private Placeholder = () => null

  render() {
    return (
      <Select
        className={cx("multi-select", {
          error: this.props.hasError,
          required: this.props.isRequired
        })}
        classNamePrefix={"select"}
        components={{
          SelectContainer: this.SelectContainer,
          Placeholder: this.Placeholder
        }}
        {...this.props}
      />
    )
  }
}

export default MultiSelect
