import moment from "moment";

export const data = [
  {
    id: "id123",
    userName: "Brad",
    userGroup: "author",
    userPhoto:
      "https://avatars1.githubusercontent.com/u/14073512?s=400&u=a1ed33a855c7feeecafbd39293d97c3cb6291565&v=4", //TODO change image
    time: moment(new Date()).subtract(2, "minutes"),
    message: `So what the German automaker is likely to focus on 
    today is the bigger picture. This will be the first time we see the
    Taycan free form any prototype bodywork.`,
    numberOfReplies: 21,
    numberOfUpvotes: 123,
    numberOfDownvotes: 0,
  },
];
