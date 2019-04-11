import React from "react"
import { render } from "enzyme"

import OmniTextInput from "./Omni-text-input"

test("Should render a text input", () => {
  const props = { label: "Label", tip: "Enter a string", value: null }
  const component = render(<OmniTextInput {...props} />)

  expect(component).toMatchSnapshot()
})
