import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { ColorContext } from "./App";

const ComponentB = () => {
  const [color, setColor] = useContext(ColorContext);
  // console.log(color, "colors");
  return (
    <div>
      ComponentB - {color}
      <br />
      <ComponentC />
    </div>
  );
};

export default ComponentB;
