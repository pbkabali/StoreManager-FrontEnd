import React from "react";
import { shallow } from "enzyme";
import { mapStateToProps, mapDispatchToProps, Products } from "../products";

describe("Product container tests", () => {
  const props = {
    loading: false,

    getProductsAction: jest.fn()
  };

  it("renders correctly", () => {
    const wrapper = shallow(<Products {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should map state to props", () => {
    const products = {
      loading: false,
      status: "SUCCEEDED",
      products: {},
      error: ""
    };
    expect(mapStateToProps({ products })).toEqual({
      loading: false,
      products: {},
      status: "SUCCEEDED",
      error: ""
    });
  });

  it("should dispatch state to props", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getProductsAction();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
