import React, { useContext } from "react";
import { NameContext } from "./App";

const ComponentC = () => {
  const name = useContext(NameContext);

  return <div>ComponentC - {name}</div>;
};

export default ComponentC;
