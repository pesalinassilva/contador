import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  
  const INIT_COUNTER = {
    leftClick: 0,
    rightClick: 0,
  }

  const [counter,setCount] = useState(INIT_COUNTER)

  const HandleLeftClick = () => {
    setCount({
      ...counter,
      leftClick: counter.leftClick + 1,
    })
  }

  const HandleRightClick = () => {
    setCount({
      ...counter,
      rightClick: counter.rightClick + 1
    })
  }

  const resetCount = () => {
    setCount(INIT_COUNTER)
  }

  return (
  <div>
    <h1>Contador de clicks</h1>
    <p></p>
    <button onClick={HandleLeftClick}>left</button>
    <button onClick={HandleRightClick}>right</button>
    <button onClick={resetCount}>reset</button>
    <p>Clicks izquierdos: {counter.leftClick}</p>
    <p>Clicks derechos: {counter.rightClick}</p>
    <p>Click totales: {counter.leftClick + counter.rightClick}</p>
   </div> 
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
