import React, {  useState } from "react";
import { MdDeleteForever, MdEditDocument, MdCancel } from "react-icons/md";
import { HiOutlineSave } from "react-icons/hi";
import { ImStarFull } from "react-icons/im";
import { useTodo } from "../context/TodoProvider";
import { toast } from "react-toastify";
const Todo = ({ todo }) => {
  const { updateTodo } = useTodo();
  const { id, todoTxt, completed } = todo;
  const { deleteTodo, completeTodo } = useTodo();
  const [error, setError] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  const [updatedTodo, setUpdatedTodo] = useState({
    id,
    todoTxt,
    completed,
  });
  const saveHandler = () => {
    if (updatedTodo.todoTxt == todo.todoTxt) {
      toast.error("nothing is editable");
      return;
    }
    if (!updatedTodo.todoTxt) {
      setError(true);
      return;
    }
    updateTodo(id, updatedTodo);
    toast.success("your note updated successfully");
    setIsUpdating(false);
  };


  return (
    <div className="grid-item">
      {!isUpdating ? (
        <div
          className={` ${
            completed ? "bg-green-400" : "bg-red-400"
          } rounded p-1 flex justify-between`}
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
            onClick={() => {
              setIsUpdating(true);
            }}
          />
          <ImStarFull
            className="cursor-pointer hover:text-white"
            size="1.5rem"
            onClick={() => {
              completed ? null : completeTodo(id);
            }}
          />
        </div>
      ) : (
        <div
          className={` ${
            completed ? "bg-green-400" : "bg-blue-400"
          } rounded  p-1 flex gap-2 justify-between`}
        >
          <input
            value={updatedTodo.todoTxt}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, todoTxt: e.target.value });
            }}
            type="text"
            name=""
            className={`rounded w-[80%]  ${
              error && !updatedTodo.todoTxt && "border-2 border-red-500"
            }`}
            id=""
          />

          <HiOutlineSave
            className={`hover:text-white cursor-pointer ${
              updatedTodo.todoTxt == todo.todoTxt && "text-gray-200"
            }`}
            fontSize="1.5rem"
            onClick={saveHandler}
          />
          <MdCancel
            className="hover:text-white cursor-pointer"
            fontSize="1.5rem"
            onClick={() => {
              setIsUpdating(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
