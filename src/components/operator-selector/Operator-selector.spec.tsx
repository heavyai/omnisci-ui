import React from "react"
import { render } from "enzyme"

import OperatorSelector from "./Operator-selector"

test("Should render an operator selector", () => {
  const props = {
    menuIsOpen: false,
    operator: "between",
    min: 0,
    max: 10
  }
  const component = render(<OperatorSelector {...props} />)

  expect(component).toMatchSnapshot()
})
