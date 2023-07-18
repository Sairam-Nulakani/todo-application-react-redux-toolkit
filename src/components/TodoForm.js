import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    dispatch(addTodo({ id: Date.now(), value }));
    setValue("");
  };
  return (
    <div className="flex rounded-lg ">
      <input
        className="p-2 border-2 border-black rounded-md"
        value={value}
        onChange={changeHandler}
      />
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white  p-2 ml-2 font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded-md"
        onClick={handleAdd}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
