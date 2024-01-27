import React, { useState } from "react";

const Generator = () => {
  const [length, setLength] = useState(12);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState("");
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        ></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => setIsCharAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="char">Char</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="Number">Number</label>
        </div>
      </div>
    </div>
  );
};

export default Generator;
