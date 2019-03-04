import React from "react"
import {render} from "enzyme"

import OmniButton from "../src/components/Omni-button"

test("Should render a button", () => {
  const props = {}
  const component = render(<OmniButton {...props} />)

  expect(component).toMatchSnapshot()
})
