import React, { useState, useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import TodoFooter from "./Todo/TodoFooter";

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: "Хороший код",
    },
    {
      id: 2,
      completed: false,
      title: "Сделан БЭМ",
    },
    {
      id: 3,
      completed: false,
      title: "Сделаны тесты",
    },
  ]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="wrapper__title">TODOS</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            onToggle={toggleTodo}
          />
        ) : (
          <p>no Todos</p>
        )}
        <TodoFooter setStatus={setStatus} />
      </div>
    </Context.Provider>
  );
};

export default App;
