import * as React from "react"
import Select, { components } from "react-select"
import FloatingLabel from "@material/react-floating-label"
import NotchedOutline from "@material/react-notched-outline"
import cx from "classnames"

export interface IMultiSelectProps {
  options?: any
  value?: any
  /** When the input changes */
  onChange?: any
  hasError?: boolean
  isRequired?: boolean
  noLabel?: boolean
  className?: string
  components?: any
}

export class MultiSelect extends React.PureComponent<IMultiSelectProps, {}> {
  private SelectContainer = ({ children, ...childProps }) => {
    const labelShouldFloat = childProps.hasValue || childProps.selectProps.inputValue
    return (
      <components.SelectContainer {...childProps}>
        <span className="select-container-wrapper">{children}</span>
        <NotchedOutline notch={labelShouldFloat}>
          <FloatingLabel
            className={cx("floating-label", {
              "no-label": childProps.selectProps.noLabel
            })}
            float={labelShouldFloat}
          >
            {childProps.selectProps.placeholder}
          </FloatingLabel>
        </NotchedOutline>
      </components.SelectContainer>
    )
  }

  private DropdownIndicator = ({ ...props }) => (
      <components.DropdownIndicator {...props}>
        ▾
      </components.DropdownIndicator>
    )

  private Placeholder = () => null

  private customStyles = {
    control: provided => ({
      ...provided,
      minHeight: "32px",
      height: "32px"
    }),
    indicatorsContainer: provided => ({
      ...provided,
      height: "32px"
    }),
    clearIndicator: provided => ({
      ...provided,
      padding: "4px"
    }),
    dropdownIndicator: provided => ({
      ...provided,
      padding: "4px"
    }),
    valueContainer: base => ({
      ...base,
      padding: "0px 6px"
    }),
    input: base => ({
      ...base,
      margin: 0,
      padding: 0
    })
  }

  render() {
    const {
      className,
      hasError,
      isRequired,
      components,
      ...otherProps
    } = this.props
    return (
      <Select
        className={cx("multi-select", className, {
          error: hasError,
          required: isRequired
        })}
        styles={this.customStyles}
        classNamePrefix={"select"}
        components={{
          SelectContainer: this.SelectContainer,
          Placeholder: this.Placeholder,
          DropdownIndicator: this.DropdownIndicator,
          ...components
        }}
        {...otherProps}
      />
    )
  }
}

export default MultiSelect
