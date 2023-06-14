import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.filteredTodos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
