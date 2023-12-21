import { createContext, useContext, useState } from "react";

const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todoTxt: "Todo msg", completed: false },
  ]);

  const addTodo = (todo) => {
    const perfectTodo = { ...todo, id: Date.now(), completed: false };
    setTodos((prev) => [perfectTodo, ...prev]);
  };
  const updateTodo = (id, todo) => {};
  const deleteTodo = (id, todo) => {};
  const completeTodo = (id) => {
    console.log('complete the todo')
    const filteredTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: true } : todo;
    });
    setTodos(filteredTodos);
  };
  return (
    <todoContext.Provider
      value={{ todos, setTodos, addTodo, updateTodo, deleteTodo, completeTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(todoContext);
};
