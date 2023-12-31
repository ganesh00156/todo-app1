import { useState, useEffect } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoApp.css"; // Import custom CSS for animations

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      const completed = parsedTodos.filter((todo) => todo.completed);
      const active = parsedTodos.filter((todo) => !todo.completed);
      setTodos(active);
      setCompletedTodos(completed);
    } else {
      setTodos([]);
      setCompletedTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.concat(completedTodos)));
  }, [todos, completedTodos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setInputValue("");
    }
  };

  const handleTodoClick = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      const completed = updatedTodos.filter((todo) => todo.completed);
      const active = updatedTodos.filter((todo) => !todo.completed);
      setTodos(active);
      setCompletedTodos((prevCompletedTodos) => {
        const existingCompleted = prevCompletedTodos.filter(
          (completedTodo) => completedTodo.id !== id
        );
        return completed
          ? [...existingCompleted, ...completed]
          : existingCompleted;
      });
    });
  };

  const handleReset = () => {
    setTodos([]);
    setCompletedTodos([]);
  };

  return (
    <Container className="todo-app">
      <div className="header">
        <h1>TODO App</h1>
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <Row className="mt-3">
        <TodoForm
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleAddTodo}
        />
      </Row>
      <Row className="todos-row">
        <Col xs={12} md={6}>
          <h2>Active Todos {todos?.length}</h2>

          <TodoList todos={todos} onClick={handleTodoClick} />
        </Col>
        <Col xs={12} md={6}>
          <h2>Completed Todos {completedTodos?.length}</h2>
          <TodoList todos={completedTodos} onClick={handleTodoClick} />
        </Col>
      </Row>
    </Container>
  );
};

export default TodoApp;
