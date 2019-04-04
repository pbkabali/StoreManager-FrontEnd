import React from "react";
import Products from "../products";
import { shallow } from "enzyme";

describe("Product container tests", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });
});
