import React from "react"
import { render } from "enzyme"

import OmniToggleButton from "./Omni-toggle-button"

test("Should render a toggle", () => {
  const props = {
    label: "Label"
  }
  const component = render(<OmniToggleButton {...props} />)

  expect(component).toMatchSnapshot()
})
