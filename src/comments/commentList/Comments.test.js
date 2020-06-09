import React from "react";
import { shallow } from "enzyme";
import Comments from "./Comments";
import Comment from "../comment/Comment";

describe("<Comments /> tests", () => {
  it("renders Comment components with correct props", () => {
    const comment1 = {
      id: "id1",
      userName: "Mike",
    };
    const comment2 = {
      id: "id2",
      userName: "Mousen",
    };

    const data = [comment1, comment2];
    const wrapper = shallow(<Comments comments={data} />);
    const comments = wrapper.find(Comment);

    expect(comments).toHaveLength(2);
    expect(comments.at(0).props().comment).toEqual(comment1);
    expect(comments.at(1).props().comment).toEqual(comment2);
  });
});
