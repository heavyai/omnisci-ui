import React from "react"
import { render } from "enzyme"

import MultiSelect from "./Multi-select"

test("Should render a multi selector", () => {
  const props = {}
  const component = render(<MultiSelect {...props} />)

  expect(component).toMatchSnapshot()
})
