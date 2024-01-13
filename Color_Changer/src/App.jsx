import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="w-[40%] h-[250px] bg-white fixed top-44 left-[30%] rounded-xl flex justify-center">
        <div className="w-[89%] h-[200px] flex my-auto justify-center rounded-lg shadow-xl"
        style={{backgroundColor:color}}>

        <h1 className="text-3xl font-semibold my-auto bg-white py-4 px-6 rounded-lg" 
        style={{color: color}}
        > 
        {color}
         </h1>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg "
            style={{ backgroundColor: "yellow" }}
            onClick={()=>setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
            onClick={()=>setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "olive" }}
            onClick={()=>setColor("olive")}
          >
            olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "coral" }}
            onClick={()=>setColor("coral")}
          >
            coral
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
            onClick={()=>setColor("purple")}
          >
            purple
          </button>
          
         
        </div>
      </div>
    </div>
  );
}

export default App;
