import React, { useState } from "react";
import { addToDo, removeToDo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";


const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(input))
    setInput("")
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Enater todos"
        className="text-3xl bg-gray-600 rounded-lg p-2 m-2 focus:border-indigo-500"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      ></input>
      <button
        type="submit"
        className=" bg-blue-600 rounded-lg text-3xl text-white p-2 hover:bg-blue-800"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddToDo;
