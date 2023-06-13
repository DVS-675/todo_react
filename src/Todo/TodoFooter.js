import React, { useContext } from "react";
import Context from "../context";

const TodoFooter = () => {
  const { activeTodo, completedTodo } = useContext(Context);
  return (
    <div className="footer">
      <button className="footer__all item">All</button>
      <button className="footer__active item" onClick={() => activeTodo()}>
        Active
      </button>
      <button
        className="footer__completed item"
        onClick={() => completedTodo()}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFooter;
