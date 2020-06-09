import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Comments from "./comments/commentList/Comments";

describe("<App /> tests", () => {
  it("renders Comments", () => {
    const wrapper = shallow(<App comments={[]} />);
    expect(wrapper.find(Comments)).toHaveLength(1);
  });
});
