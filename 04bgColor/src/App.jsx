import { useState } from "react";

function App() {
  let [color, setColor] = useState("#121214");
  return (
    <>
      <div
        className="w-full h-screen duration-200  "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-6 ">
          <div className="flex flex-wrap justify-center bg-white rounded-md px-6 py-3 gap-2">
            <button
              className="bg-red-600 px-5 py-1 text-white rounded-md outline-none "
              onClick={() => setColor("#FF0000")}
            >
              Red
            </button>
            <button
              className="bg-green-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("#008000")}
            >
              green
            </button>
            <button
              className="bg-yellow-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("#FFFF00")}
            >
              yellow
            </button>
            <button
              className="bg-blue-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("blue")}
            >
              blue
            </button>
            <button
              className="bg-gray-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("#808080")}
            >
              gray
            </button>
            <button
              className="bg-pink-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("#FFC0CB")}
            >
              pink
            </button>
            <button
              className="bg-purple-600 px-5 py-1 text-white rounded-md"
              onClick={() => setColor("#800080")}
            >
              purple
            </button>
            <button
              className="bg-white px-5 py-1 text-black rounded-md"
              onClick={() => setColor("white")}
            >
              white
            </button>
            <button
              className="bg-black px-5 py-1 text-white rounded-md"
              onClick={() => setColor("black")}
            >
              black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
