import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-xl"
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor("white")}  className="outline-none px-4 py-1 rounded-xl"
          style={{backgroundColor: "white"}}>White</button>
          <button onClick={()=> setColor("yellow")}  className="outline-none px-4 py-1 rounded-xl"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=> setColor("black")}  className="outline-none px-4 py-1 rounded-xl"
          style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=> setColor("gray")} className="outline-none px-4 py-1 rounded-xl"
          style={{backgroundColor: "gray"}}>Gray</button>
        </div>
      </div>
    </div>
  );
}

export default App;
