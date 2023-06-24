import React from "react";
import { Form, Col } from "react-bootstrap";

const TodoForm = ({ value, onChange, onKeyPress }) => {
  return (
    <Col xs={12} md={{ span: 6, offset: 3 }}>
      <Form.Control
        type="text"
        placeholder="Enter a new TODO"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="mb-3"
      />
    </Col>
  );
};

export default TodoForm;
