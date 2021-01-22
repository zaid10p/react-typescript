import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../features/todos/todosSlice";

// The rest of the code stays the same:
export const AddTodo : React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
    dispatch(addTodoAsync(title));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoName"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};
