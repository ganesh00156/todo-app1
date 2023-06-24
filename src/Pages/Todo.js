import React from "react";
import { ListGroup } from "react-bootstrap";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";

/**
 * This is a functional component in JavaScript that renders a todo item with a checkbox and text.
 * @returns The `Todo` component is being returned. It takes in two props: `todo` and `onClick`. It
 * renders a `ListGroup.Item` with the `id`, `text`, and `completed` properties of the `todo` object.
 * It also conditionally renders either a checkmark or a pending icon based on the `completed`
 * property. When the `ListGroup.Item` is clicked, it
 */
const Todo = ({ todo, onClick }) => {
  const { id, text, completed } = todo;

  return (
    <ListGroup.Item
      key={id}
      className={`todo ${completed ? "completed" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <span className="text">
          {completed ? (
            <IoCheckmarkDoneCircleOutline className="mr-2" />
          ) : (
            <MdOutlinePending className="mr-2 pr-2" />
          )}
          <span> {text}</span>
        </span>
      </div>
    </ListGroup.Item>
  );
};

export default Todo;
