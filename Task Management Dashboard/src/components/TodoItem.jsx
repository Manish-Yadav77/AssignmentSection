import React from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo}) {
    const { toggleComplete,deleteTodo} = useTodo()

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${todo.completed ? "line-through" : ""}`}
        value={todo.todo}
        readOnly={true}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${todo.completed ? "line-through" : ""}`}
        value={todo.desc}
        readOnly={true}
      />
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;