import React from "react"
import { render } from "enzyme"

import OmniToggle from "./Omni-toggle"

test("Should render a toggle", () => {
  const props = {
    label: "Label",
    isChecked: true
  }
  const component = render(<OmniToggle {...props} />)

  expect(component).toMatchSnapshot()
})
