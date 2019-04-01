import React from "react";
import App from "../app";
import { shallow } from "enzyme";


it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
});
