import { useState } from "react";
import "./App.css";


function App() {
  const [total, setTotal] = useState(0);

  const add = () => {
    setTotal((prev) => prev + 1);
  };
  const min = () => {
    setTotal((prev) => prev - 1);
  };

  return (
    <>
      <h1>Ola</h1>
      <h2>{total}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => min()}>-</button>
    </>
  );
}

export default App;
