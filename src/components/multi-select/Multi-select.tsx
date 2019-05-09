import * as React from "react"
import Select, { components } from "react-select"
import FloatingLabel from "@material/react-floating-label"
import { ListItem } from "@rmwc/list"
import { FormattedOption } from "@rmwc/select/dist/index.d"
import "@material/react-floating-label/index.scss"
import "../../vars.scss"

export interface IMultiSelectProps {
  label?: string
  options?: FormattedOption[]
  value?: FormattedOption
  /** When the input changes */
  onChange?: any
}

export const MultiSelect = (props: IMultiSelectProps) => {

  const SelectContainer = ({ children, ...childProps }) => {
    return (
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
  }

  const Placeholder = () => null

  return (
    <Select
      className={"multi-select"}
      classNamePrefix={"select"}
      components={{
        SelectContainer,
        Placeholder
      }}

      {...props}
    />
  )
}

export default MultiSelect
