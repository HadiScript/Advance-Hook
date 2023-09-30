// useMemo
// useCallback
// memo
// useRef

import React, { useEffect } from "react";

let renderCount = 0;

const ComA = ({ countB }) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>Render Count From Component B - {renderCount}</h1>
      <br />
      <h5>here is the value from Component A - {countB}</h5>
    </div>
  );
};

export default ComA;
