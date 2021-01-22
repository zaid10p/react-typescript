import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
//import { RootState } from "../app/store";
import { selectTodos, toggleTodo } from "../features/todos/todosSlice";
import { AddTodo } from "./AddTodos";

interface TodosProps extends RouteComponentProps {}

export const Todos: React.FC<TodosProps> = (props) => {
  console.log(props);

  const dispatch = useDispatch();
  // Now, use the selector inside right away,no need to destructure the result:
  const todos = useSelector(selectTodos);
  return (
    <div style={{ margin: "20px" }}>
      <h3>Todos List</h3>
      <AddTodo />
     <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
