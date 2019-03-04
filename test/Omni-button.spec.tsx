import React from 'react';
import { shallow } from "enzyme"
import { expect } from "chai"

import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

import OmniButton from '../src/components/Omni-button.tsx';

describe("render components", () => {

  it("should render a button", () => {
    const props = {}
    const wrapper = shallow(<OmniButton {...props} />)

    expect(wrapper.find({ className: "omni-button" })).to.have.length(
      1
    )
  })
})
