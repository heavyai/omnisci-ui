import React from "react"
import { render } from "enzyme"

import OmniButton from "./Omni-button"

test("Should render a toggle", () => {
  const props = {
    label: "Label"
  }
  const component = render(<OmniButton {...props} />)

  expect(component).toMatchSnapshot()
})
