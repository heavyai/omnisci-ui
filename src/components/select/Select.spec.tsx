import React from "react"
import { render } from "enzyme"

import Select from "./Select"

test("Should render a selector", () => {
  const props = {
    label: "Standard",
    value: "1",
    options: [
      { label: "one", value: "1" },
      { label: "two", value: "2" },
      { label: "three", value: "3" }
    ]
  }
  const component = render(<Select {...props} />)

  expect(component).toMatchSnapshot()
})
