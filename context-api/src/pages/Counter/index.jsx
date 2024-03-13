import { useState } from "react";
import { CounterText } from "./styles";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter((prev) => prev + 1);
  };

  const dec = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <p>
        Counter:{" "}
        {<CounterText isEven={counter % 2 === 0}>{counter}</CounterText>}
      </p>
    </>
  );
};

export default Counter;
