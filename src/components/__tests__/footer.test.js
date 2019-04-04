import React from "react";
import Footer from "../footer";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
