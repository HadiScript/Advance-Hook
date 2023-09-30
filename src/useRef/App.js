import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" placeholder="A" ref={inputRef} />
      <input type="text" placeholder="B" />
      <input type="text" placeholder="C" />

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
