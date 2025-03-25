import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";


function TodoForm() {
    const { addTodo } = useTodo()
    const [todo, setTodo] = useState("")
    const [desc, setDesc] = useState("")

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({todo,desc, completed:false})
        setTodo("")
        setDesc("")
    }

  return (
    <form onSubmit={add} className="flex gap-3 sm:flex-row flex-col">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Descripition [ Optional... ] "
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;