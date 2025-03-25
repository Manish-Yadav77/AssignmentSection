import React from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleComplete, deleteTodo } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-lg p-5 gap-3 shadow-lg transition-all duration-300 hover:shadow-xl ${
        todo.completed ? "bg-green-100" : "bg-purple-100"
      }`}
    >
      {/* Left Section: Checkbox & Status */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5 accent-green-600"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <div className="text-sm font-semibold text-black">
          {todo.completed ? <p >✅ Completed</p>  : <p>⏳ Not Completed</p> }
        </div>
      </div>

      {/* Middle Section: Task Content */}
      <div className="flex flex-col w-full">
        <p
          className={`text-lg font-medium px-3 py-1 rounded-md ${
            todo.completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {todo.todo}
        </p>

        {todo.desc && (
          <p
            className={`text-sm px-3 py-1 text-gray-700 italic ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.desc}
          </p>
        )}
      </div>

      {/* Right Section: Delete Button */}
      <button
        className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌ <span className="hidden sm:inline">Delete</span>
      </button>
    </div>
  );
}

export default TodoItem;
