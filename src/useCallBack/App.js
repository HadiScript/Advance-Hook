import React, { useCallback, useState } from "react";

const funCounter = new Set();

// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(3);
// uniqueNumbers.add(1); // Duplicate value won't be added

// console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }

const App = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  const incA = () => setA(A + 1);
  const incB = useCallback(() => {
    console.log("inc b");
    setB(B + 1);
  }, [B]);

  funCounter.add(incA);
  funCounter.add(incB);

  console.log({ funCounter });

  return (
    <div>
      <h3>value of A - {A}</h3>
      <h3>value of B - {B}</h3>

      <br />
      <button onClick={incA}>inc A</button>
      <button onClick={incB}>inc B</button>
    </div>
  );
};

export default App;
