import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return <>
  <h1>Counter App</h1>
  <p>Count:{count}</p>
  <button onClick={()=> setCount((prev)=> prev+1)}>Increement</button>
  <button onClick={()=> setCount((prev)=> prev-1)}>Decreement</button>
  </>;
};

export default Counter;
