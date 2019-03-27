import React from "react"
import {render} from "enzyme"

import OmniButton from "./Omni-button"

test("Should render a button", () => {
  const props = {}
  const component = render(<OmniButton {...props} />)

  expect(component).toMatchSnapshot()
})
