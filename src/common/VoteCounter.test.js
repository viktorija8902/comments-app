import React from "react";
import { shallow } from "enzyme";
import VoteCounter from "./VoteCounter";
import ButtonWithImage from "./buttonWithImage/ButtonWithImage";

describe("<VoteCounter /> tests", () => {
  it("renders ButtonWithImage components with correct props", () => {
    const wrapper = shallow(<VoteCounter />);
    const comments = wrapper.find(ButtonWithImage);

    expect(comments).toHaveLength(2);
    //TODO check props, clicks
  });
});
