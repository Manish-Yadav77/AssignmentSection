import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, desc, completed: false });
    setTodo("");
    setDesc("");
  };

  return (
    <form
      onSubmit={add}
      className="flex flex-col sm:flex-row items-center gap-4 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto"
    >
      {/* Input Fields */}
      <div className="flex flex-col w-full gap-3">
        <input
          type="text"
          placeholder="✍️ Write your task..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none bg-gray-50 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <textarea
          placeholder="📝 Task description (optional)..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none bg-gray-50 text-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition resize-none h-15"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      {/* Add Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105 w-50"
      >
        ➕ Add Task
      </button>
    </form>
  );
}

export default TodoForm;
