import { useState } from "react";
import { useSelector } from "react-redux";
const TodoDropdown = () => {
  const todos = useSelector((state) => state.todos);
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h2 className=" mt-2 text-2xl font-bold mb-4">Dropdown List Example</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
         <option value="">Select an option...</option>
        {todos.map((item) => {
          return (
            <option key={item.key} value={item.text}>
              {item.text}
            </option>
          );
        })}
      </select>
      <p className="mt-2">Selected Option: {selected}</p>
    </div>
  );
};
export default TodoDropdown;
