import { createContext, useContext, useState } from "react";

const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todoTxt: "Todo msg", completed: false },
  ]);
  console.log("todos are", todos);
  const addTodo = (todo) => {
    const perfectTodo = { ...todo, id: Date.now(), completed: false };
    setTodos((prev) => [perfectTodo, ...prev]);
  };
  const updateTodo = (id, todo) => {
    const filteredTods = todos.map((item) => {
      return item.id === id ? { ...item, ...todo } : item;
    });
    setTodos(filteredTods);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
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
