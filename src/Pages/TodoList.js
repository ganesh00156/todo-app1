import React from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, onClick }) => {
  return (
    <ListGroup className="todo-list">
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} onClick={onClick} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
