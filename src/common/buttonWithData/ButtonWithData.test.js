import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import ButtonWithData from "./ButtonWithData";

describe("<ButtonWithData /> tests", () => {
  let wrapper, clickSpy;

  beforeEach(() => {
    clickSpy = sinon.spy();
    wrapper = shallow(
      <ButtonWithData label="Click" data="10" onClick={clickSpy} />
    );
  });

  it("button has data", () => {
    expect(wrapper.find(".data-button__data").text()).toEqual("10");
  });

  it("button has label", () => {
    expect(wrapper.find(".data-button__label").text()).toEqual("Click");
  });

  it("button is clickable", () => {
    wrapper.find(".data-button").props().onClick();
    expect(clickSpy.callCount).toEqual(1);
  });
});
