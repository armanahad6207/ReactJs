import { useState } from "react";

function App() {
  const [inputPwd, setInputPwd] = useState("");
  const [range, setRange] = useState(4);
  const [includeLowerCase, setlowerCase] = useState(false);
  const [includeUpperCase, setUpperCase] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSymbools, setSymbools] = useState(false);

  const passwordGenerater = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbools = "!@#$%^&*()_";

    let password = "";
    let finalPassword = "";
    if (includeLowerCase) password += lowercase;
    if (includeUpperCase) password += uppercase;
    if (includeNumbers) password += numbers;
    if (includeSymbools) password += symbools;

    for (let i = 1; i <= range; i++) {
      finalPassword += password.charAt(Math.random() * password.length);
    }
    setInputPwd(finalPassword);
  };

  return (
    <>
      <div className=" h-screen w-full flex flex-col  justify-center items-center  ">
        <div className=" p-5 rounded-lg min-w-96 border ">
          <h1 className="text-white text-center text-4xl mb-10">
            Password Generator
          </h1>
          <div>
            <div className="relative">
              <input
                value={inputPwd}
                type="text"
                className="w-96 h-10 text-2xl rounded-sm outline-none p-6"
                readOnly
              />
              <i className="ri-file-copy-line absolute right-1 top-2 cursor-pointer text-3xl text-slate-700 hover:text-slate-300"></i>
            </div>

            <div className="flex justify-between items-center   mt-6">
              <input
                className="basis-[12rem] outline-none"
                type="range"
                min={8}
                max={30}
                value={range}
                onChange={(e) => {
                  setRange(e.target.value);
                }}
              />
              <span className="text-white">{range}</span>
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="characters"
              >
                include(abc..z)
              </label>

              <input
                type="checkbox"
                id="characters"
                className="w-5 h-5  "
                onChange={() => setlowerCase((prev) => !prev)}
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="characters"
              >
                include(ABC..Z)
              </label>

              <input
                type="checkbox"
                id="characters"
                className="w-5 h-5 "
                onChange={() => setUpperCase((prev) => !prev)}
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="numbers"
              >
                include(0-9)
              </label>
              <input
                type="checkbox"
                id="numbers"
                className="w-5 h-5 "
                onChange={() => setNumbers((prev) => !prev)}
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="symbol"
              >
                include(@#%..)
              </label>
              <input
                type="checkbox"
                id="symbol"
                className="w-5 h-5 "
                onChange={() => setSymbools((prev) => !prev)}
              />
            </div>

            <div className="flex justify-center mt-3">
              <button
                className=" px-8 py-2 text-black bg-yellow-400 rounded-sm font-semibold "
                onClick={passwordGenerater}
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
