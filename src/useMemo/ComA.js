import React, { useEffect } from "react";

let renderCount = 0;

const ComA = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>Render Count From Component A - {renderCount}</h1>
      <br />
      <h5>here is the value from Component A - {count}</h5>
    </div>
  );
};

export default ComA;
