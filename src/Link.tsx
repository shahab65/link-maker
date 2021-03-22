import React from "react";
import { BASE_URL } from "./App";
const Link = (props: any) => {
  const { href } = props;
  return (
    <div>
      <a href={BASE_URL + href}>{BASE_URL + href}</a>
    </div>
  );
};

export default Link;
