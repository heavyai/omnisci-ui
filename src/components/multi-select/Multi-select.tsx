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
  value?: any
  /** When the input changes */
  onChange?: any
}

export const MultiSelect = (props: IMultiSelectProps) => {
  const MenuList = props => {
    const selectedValues = props.getValue().map(item => item.value)
    console.log(props)
    return (
      <components.MenuList {...props}>
        {props.options
          .filter(option =>
            props.selectProps.filterOption(option, props.selectProps.inputValue)
          )
          .map((option, idx) => (
            <ListItem
              key={idx}
              value={option.value}
              selected={selectedValues.indexOf(option.value) > -1}
              data-value={option.value}
              onClick={() => {
                props.selectOption(option)
              }}
            >
              {option.label}
            </ListItem>
          ))}
      </components.MenuList>
    )
  }

  const SelectContainer = ({ children, ...props }) => {
    return (
      <components.SelectContainer {...props}>
        <span className="select-container-wrapper">{children}</span>
        <FloatingLabel
          className={"floating-label"}
          float={props.hasValue || props.selectProps.inputValue}
        >
          {props.selectProps.placeholder}
        </FloatingLabel>
      </components.SelectContainer>
    )
  }

  const Placeholder = () => null

  return (
    <Select
      className={"multi-select"}
      classNamePrefix={"select"}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "rgb(100, 167, 219)",
          primary50: "rgb(150, 197, 229)",
          primary75: "rgb(200, 227, 239)",
          primary: "rgb(0, 137, 209)"
        }
      })}
      components={{
        MenuList,
        SelectContainer,
        Placeholder
      }}
      {...props}
    />
  )
}

export default MultiSelect
