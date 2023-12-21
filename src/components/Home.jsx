import React, { useState } from "react";

import { useTodo } from "../context/TodoProvider";
import Todo from "./Todo";

const Home = () => {
  const { todos, addTodo } = useTodo();
  const [todo, setTodo] = useState({ todoTxt: "" });
  const [error, setError] = useState(false);
  const formHanddler = () => {
    if (!todo.todoTxt) {
      setError(true);
      return;
    }
    addTodo(todo);
  };
  return (
    <>
      <div className="p-2 max-w-[600px] mx-auto">
        <h1 className="text-center text-3xl uppercase bg-black text-white p-2">
          Add Todo
        </h1>
        <div className="inputBox flex bg-slate-200 justify-center items-center gap-2 p-2 ">
          <input
            placeholder="Add Todo"
            className={`py-1 px-2 rounded bg-slate-100 w-full ${
              error && !todo.todoTxt && "border-2 border-red-500"
            }`}
            type="text"
            value={todo.todoTxt}
            onChange={(e) => {
              setTodo({ ...todo, todoTxt: e.target.value });
            }}
          />
          <button
            onClick={formHanddler}
            className="bg-blue-400 py-1 px-2 uppercase font-bold rounded hover:bg-blue-500"
          >
            Add
          </button>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-6 p-2">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Home;
