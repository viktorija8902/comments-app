import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Button from "./Button";

describe("<Button /> tests", () => {
  it("renders button label", () => {
    const wrapper = shallow(<Button label="Click" onClick={sinon.spy()} />);
    expect(wrapper.find(".button").text()).toEqual("Click");
  });

  it("button is clickable", () => {
    const clickSpy = sinon.spy();
    const wrapper = shallow(<Button label="Click" onClick={clickSpy} />);

    wrapper.find(".button").props().onClick();
    expect(clickSpy.callCount).toEqual(1);
  });
});
