import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");
  // changing color with by creating an extra fucntion  
    const changeColor =()=>{
      setColor('violet')
    }
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 bg-red-400" >
        <div className="flex flex-wrap justify-center gap-3 p-2 rounded-3xl bg-amber-700">
          <button
            onClick={()=>setColor("red")}  // changing color with useState function
            className="outline-none  px-4 py-1 rounded-full shadow-lg bg-red-500"
          >
            Red
          </button>
          <button
            onClick={()=>setColor("green")}
            className="outline-none  px-4 py-1 rounded-full shadow-lg bg-green-700"
          >
            Green
          </button>
          <button
            onClick={()=>setColor("blue")}
            className="outline-none  px-4 py-1 rounded-full shadow-lg bg-blue-700"
          >
            blue
          </button>
          <button
            onClick={changeColor}
            className="outline-none  px-4 py-1 rounded-full shadow-lg bg-violet-400"
          >
            voilet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
