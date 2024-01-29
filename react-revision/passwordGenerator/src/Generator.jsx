import React, { Component, useCallback, useEffect, useRef, useState } from "react";

const Generator = () => {
  const [length, setLength] = useState(12);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  //  Executing code at start and chnage in dependency array
  useEffect(() => {
    generatePassword();
  }, [isCharAllowed, numberAllowed, length]);
  // using callback for memoization
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isCharAllowed) str += "!@#$%^&*";
    if (numberAllowed) str += "1234567890";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isCharAllowed, numberAllowed]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  };

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
          ref={passwordRef}
        ></input>
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
        >
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
        {/* // Character Check Box */}
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => setIsCharAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="char">Char</label>
        </div>
        {/* // Number Check Box */}
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
