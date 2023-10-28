import { useState } from "react";

function App() {

  // let counter = 5;
  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    console.log("add value", Math.random());
  }


  return  (
    <>
    <h1>Muhammad Adnan</h1>
    <h2>Counter Value: {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value</button>
    <button>Remove Value</button>
    </>
  )
}

export default App
