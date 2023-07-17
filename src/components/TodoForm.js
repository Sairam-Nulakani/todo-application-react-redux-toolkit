import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center flex-col">
        <input
          className="p-2 border-2 border-black rounded-md"
          onChange={changeHandler}
          value={value}
        />
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3">
          Add Todo
        </button>
        {value}
      </div>
    </div>
  );
};

export default TodoForm;
