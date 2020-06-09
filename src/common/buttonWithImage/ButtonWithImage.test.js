import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import ButtonWithImage from "./ButtonWithImage";

describe("<ButtonWithImage /> tests", () => {
  let wrapper, clickSpy, button;

  beforeEach(() => {
    clickSpy = sinon.spy();
    wrapper = shallow(
      <ButtonWithImage
        label="Click"
        image="src..."
        onClick={clickSpy}
        alt="Click to upvote!"
      />
    );
    button = wrapper.find(".image-button");
  });

  it("button has image", () => {
    expect(button.find("img")).toHaveLength(1);
  });

  it("button has label", () => {
    expect(button.text().includes("Click")).toBe(true);
  });

  it("button has aria label", () => {
    expect(button.props()["aria-label"]).toEqual("Click to upvote!");
  });

  it("button is clickable", () => {
    button.props().onClick();
    expect(clickSpy.callCount).toEqual(1);
  });
});
