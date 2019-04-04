import React from "react";
import Products from "../products";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(<Products />);
  expect(wrapper).toMatchSnapshot();
});
