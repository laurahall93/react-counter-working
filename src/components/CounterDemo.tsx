import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 1);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 5);
  };

  const handleRemoveOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue - 1);
  };

  const handleRemoveFive = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue - 5);
  };

  const handleReset = () => {
    queueRerenderWithNewCounterValue(0);
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleAddFive}>+5</button>
      <button onClick={handleRemoveOne}>-1</button>
      <button onClick={handleRemoveFive}>-5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
