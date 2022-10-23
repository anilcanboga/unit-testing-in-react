import React from 'react';
import Enzyme, { shallow } from "enzyme";
import SearchBox from './SearchBox';


describe("Test with enzyme", () => {

  it("Click function with enzyme", () => {
    const onSearchMock = jest.fn();
    const wrapper = shallow(<SearchBox />);
    const button = wrapper.find("button");
    const input = wrapper.find("input");
    console.log("ab: ", input.props().value)

    input.simulate("change", { target: { value: "ab" } })
    console.log("ab: ", input.props().value)
    button.simulate("click")
    expect(onSearchMock).not.toHaveBeenCalled()


  });
})