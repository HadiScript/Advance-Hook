// useMemo
import React, { useState, useMemo } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

const App = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incCountA = () => setCountA(countA + 1);
  const incCountB = () => setCountB(countB + 1);

  const MemoCompo = useMemo(() => {
    return <ComA count={countA} />;
  }, [countA]);

  return (
    <div>
      Count A - {countA}
      <button onClick={incCountA}> Inc Count A </button>
      <button onClick={incCountB}> Inc Count B </button>
      <br />
      {MemoCompo}
      <br />
      <ComB countB={countB} />
    </div>
  );
};

export default App;
