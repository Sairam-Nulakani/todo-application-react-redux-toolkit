import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="mt-5">
      <li>
        {todo.value}
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ml-7 rounded"
          onClick={handleRemove}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
