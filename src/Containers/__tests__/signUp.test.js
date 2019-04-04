import React from "react";
import { SignUp } from "../signUp";
import { shallow } from "enzyme";
import { signUpAction } from "../../redux/actions/signUpAction";

describe("signup container tests", () => {
  const onSubmitMock = jest.fn();
  const props = {
    registerUser: onSubmitMock,
    signUpAction: onSubmitMock
  };
  const wrapper = shallow(<SignUp {...props} />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls submit function", () => {
    wrapper.find("Button").simulate("click");
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
