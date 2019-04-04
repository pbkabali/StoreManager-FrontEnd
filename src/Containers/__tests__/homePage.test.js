import React from "react";
import { HomePage } from "../homePage";
import { shallow } from "enzyme";
import { loginAction } from "../../redux/actions/loginAction";

describe("login container tests", () => {
  const onSubmitMock = jest.fn();
  const props = {
    loginUser: onSubmitMock,
    loginAction: onSubmitMock
  };
  const wrapper = shallow(<HomePage {...props} />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls submit function", () => {
    wrapper.find("Button").simulate("click");
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
