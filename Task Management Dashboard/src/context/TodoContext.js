import React, { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:{
        id:1,
        todo:'todo msg',
        description:'todo description',
        completed:false
    },
    addTodo: (todo) =>{},
    addDescriptionTodo: (todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export
 const TodoProvider = TodoContext.Provider

