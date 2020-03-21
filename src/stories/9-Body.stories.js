import React from "react";

import Input from "../components/Input";
import Body from "../components/Body";

export default {
  title: "Body",
  component: Body
};

export const version1 = props => (
  <Body>
    <Input></Input>
  </Body>
);
