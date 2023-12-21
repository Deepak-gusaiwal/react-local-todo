import React from "react";
import {
  MdDeleteForever,
  MdEditDocument,
  MdIncompleteCircle,
} from "react-icons/md";
import { useTodo } from "../context/TodoProvider";
const Todo = ({ todo }) => {
  const { id, todoTxt, completed } = todo;
  const { deleteTodo, completeTodo } = useTodo();

  const handdleUpdate = () => {};
  return (
    <div className="grid-item">

      <div
        className={` ${
          completed ? "bg-green-400" : "bg-red-400"
        } rounded py-1 px-2 flex justify-between`}
      >
        <h3 className={`font-bold ${completed ? "line-through" : ""}`}>
          {todoTxt}
        </h3>
        <MdDeleteForever
          className="ml-auto cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={() => {
            deleteTodo(id);
          }}
        />
        <MdEditDocument
          className="cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={handdleUpdate}
        />
        <MdIncompleteCircle
          className="cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={() => {
            completed ? null : completeTodo(id);
          }}
        />
      </div>

      <div
        className={` ${
          completed ? "bg-green-400" : "bg-blue-400"
        } rounded py-1 px-2 flex justify-between`}
      >
        <input type="text" name="" className="rounded" id="" />
        <MdDeleteForever
          className="ml-auto cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={() => {
            deleteTodo(id);
          }}
        />
        <MdEditDocument
          className="cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={handdleUpdate}
        />
        <MdIncompleteCircle
          className="cursor-pointer hover:text-white"
          size="1.5rem"
          onClick={() => {
            completed ? null : completeTodo(id);
          }}
        />
      </div>

    </div>
  );
};

export default Todo;
