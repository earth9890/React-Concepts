
import React from "react";

const TodoItem = ({ todo, toggleCompletion }) => {
  const handleTodoClick = () => {
    toggleCompletion(todo.id);
  };

  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={handleTodoClick}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
