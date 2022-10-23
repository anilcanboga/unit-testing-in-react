import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const data = {
  title: "AB",
  desc: "AB",
  image:
    "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
};

const defaultComponent = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);
  return wrapper;
};

describe("Header test başlangıç", () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = defaultComponent();
  // });

  it("render Header", () => {
    // const wrapper = shallow(<Header />);
    const wrapper = defaultComponent();
    expect(wrapper).toBeTruthy();
  });
  it("send props", () => {
    const wrapper = defaultComponent(data);
    console.log(wrapper.debug());

    expect(wrapper.find("img").prop("src")).toBe(data.image);
    expect(wrapper.find("h2").text()).toBe(data.title);
    expect(wrapper.find("p").text()).toBe(data.desc);
  });
});
