import React from "react"
import { render } from "enzyme"

import OmniToggleIcon from "./Omni-toggle-icon"

test("Should render a toggleable icon", () => {
  const props = {
    iconOn: "favorite",
    iconOff: "favorite_border"
  }
  const component = render(<OmniToggleIcon {...props} />)

  expect(component).toMatchSnapshot()
})
