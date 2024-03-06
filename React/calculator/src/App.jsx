import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //------------------------------------------------------------------------------
  //Variables
  const [frNum, setFrNum] = useState(0);
  const [secNum, setSecNum] = useState(0);
  const [total, setTotal] = useState(0);
  const [opera, setOpera] = useState("Addition");
  //------------------------------------------------------------------------------
  //Functions
  const calculation = () => {
    if (opera == "Addition") {
      return setTotal(frNum + secNum);
    } else if (opera == "Subtraction") {
      return setTotal(frNum - secNum);
    } else if (opera == "Multiplication") {
      return setTotal(frNum * secNum);
    } else if (opera == "Division") {
      return setTotal(frNum / secNum);
    }
  };

  useEffect(() => {
    calculation();
  }, [frNum, secNum, opera]);
  //------------------------------------------------------------------------------
  return (
    <>
      <p>--------------------------------------------</p>
      <h1>Calculator with React</h1>
      <div>
        <label>Frist Number</label>
        <input
          type="number"
          value={frNum}
          onChange={(num1) => setFrNum(num1.target.value)}
        />
      </div>
      <div>
        <label>Second Number</label>
        <input
          type="number"
          value={secNum}
          onChange={(num2) => setSecNum(num2.target.value)}
        />
      </div>
      <div>
        <select onChange={(operation) => setOpera(operation.target.value)}>
          <option>Addition</option>
          <option>Subtraction</option>
          <option>Multiplication</option>
          <option>Division</option>
        </select>
      </div>
      <label>{total}</label>
    </>
  );
}

export default App;
