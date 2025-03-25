import React from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleComplete, deleteTodo } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black sm:flex-row flex-col ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="flex gap-1">

      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
        />
      {
        todo.completed? <p className="sm:hidden font-bold pb-1">completed</p>:<p className="sm:hidden font-bold">not completed yet</p>
      }
      </div>
      <p
        className={`border outline-none w-full bg-transparent rounded-lg pl-2 sm:mb-0 mb-4 ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {todo.todo}
      </p>

      {
        todo.desc && 
      <p
      className={`border outline-none w-full bg-transparent rounded-lg pl-2 sm:mb-0 mb-4 ${
        todo.completed ? "line-through" : ""
        }`}
        >
        {todo.desc}
      </p>
      }
      {/* Delete Todo Button */}
      <div className="flex gap-1">

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-300 shrink-0"
        onClick={() => deleteTodo(todo.id)}
        >
        ❌
      </button>
      <p className=" sm:hidden font-bold pt-0.5">
        Delete
      </p>
        </div>
    </div>
  );
}

export default TodoItem;
