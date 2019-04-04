import React from "react";
import NavBar from "../navBar";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
