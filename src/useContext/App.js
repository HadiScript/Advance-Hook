import React, { useState } from "react";
import ComponentA from "./ComponentA";
export const NameContext = React.createContext();
export const ColorContext = React.createContext();

const App = () => {
  const [color, setColor] = useState("Red");

  return (
    <NameContext.Provider value={"kia hal hein"}>
      <ColorContext.Provider value={[color, setColor]}>
        <div>
          <ComponentA />
        </div>
      </ColorContext.Provider>
    </NameContext.Provider>
  );
};

export default App;
