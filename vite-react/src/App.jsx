import { useState } from "react";

function App() {

  // let counter = 5;
  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    console.log("clicked", Math.random());
    
    if (counter<20) {
      setCounter(counter + 1)
    }else{
      console.log("error");
    }
  }
  const removeValue = ()=>{
    if (counter>0) {
      setCounter(counter-1)
    } else {
      console.log("ok");
    }
  }

  return  (
    <>
    <h1>Muhammad Adnan</h1>
    <h2>Counter Value: {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
