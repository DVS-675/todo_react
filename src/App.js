import React from "react";
import "./App.css";
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

  const activeTodo = () => {
    setTodos(todos.filter((todo) => todo.completed === false))
  }

  const completedTodo = () => {
    setTodos(todos.filter((todo) => todo.completed === true))
  }

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
    <Context.Provider value={{ removeTodo, activeTodo, completedTodo }}>
      <div className="wrapper">
        <h1 className="wrapper__title">TODOS</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>no Todos</p>
        )}
        <TodoFooter />
      </div>
    </Context.Provider>
  );
};

export default App;
