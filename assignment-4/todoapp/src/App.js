import React, { useState } from "react";
import "./App.css";
// import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Submit the assignment by 6 PM",
      isCompleted: true,
    },
    {
      content: "Complete the LCO lectures",
      isCompleted: false,
    },
    {
      content: "",
      isCompleted: false,
    },
  ]);
  // const Todo = ({ todo }) => {
  //   return <div className="todo">{todo.content}</div>;
  // };

  function handleClick(e, i) {
    if (e.key === "Enter") {
      createToDo(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodo(i);
    }
  }

  function createToDo(e, i) {
    //check if below can be done by settodos
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  function updateTodo(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodo(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos((todos) =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }
  function toggleTodoComplete(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <Header title="TO-DO" />
        <img></img>
      </div>
      <form className="list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div className={"checkbox"} onClick={() => toggleTodoComplete(i)}>
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleClick(e, i)}
                onChange={(e) => updateTodo(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default App;
