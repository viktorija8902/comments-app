import React from "react";
import { shallow } from "enzyme";
import Comment from "./Comment";
import Button from "../common/Button";
import ButtonWithData from "../common/ButtonWithData";

describe("<Comment /> tests", () => {
  const comment = {
    id: "id123",
    userName: "Name1",
    userGroup: "author",
    userPhoto:
      "https://avatars1.githubusercontent.com/u/14073512?s=400&u=a1ed33a855c7feeecafbd39293d97c3cb6291565&v=4", //TODO change image
    //time: moment(new Date()).subtract(2, "minutes"),
    message: "message1",
    numberOfReplies: 21,
    numberOfUpvotes: 123,
    numberOfDownvotes: 0,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comment comment={comment} />);
  });

  it("renders user photo", () => {
    expect(wrapper.find(".comment__image")).toHaveLength(1);
  });

  it("renders user name", () => {
    expect(wrapper.find(".comment__username").text()).toEqual(comment.userName);
  });

  it("renders user group", () => {
    expect(wrapper.find(".comment__user-group").text()).toEqual(
      comment.userGroup
    );
  });

  it("renders message", () => {
    expect(wrapper.find(".comment__message").text()).toEqual(comment.message);
  });

  it("renders clickable Reply button", () => {
    expect(wrapper.find(".comment__reply")).toHaveLength(0);
    const button = wrapper.find(Button);
    expect(button.props().label).toEqual("Reply");

    button.props().onClick();
    expect(wrapper.find(".comment__reply")).toHaveLength(1);
  });

  it("renders clickable Replies button", () => {
    expect(wrapper.find(".comment__replies")).toHaveLength(0);
    const button = wrapper.find(ButtonWithData);
    expect(button.props().label).toEqual("Replies");

    button.props().onClick();
    expect(wrapper.find(".comment__replies")).toHaveLength(1);
  });
});
