import React from "react"
import { render } from "enzyme"

import Toggler from "./Toggler"

test("Should render a toggle", () => {
  const props = {
    isPrimaryState: true
  }
  const component = render(<Toggler {...props} />)

  expect(component).toMatchSnapshot()
})
