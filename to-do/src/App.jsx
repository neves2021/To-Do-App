import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy groceries",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Create  a new project in React",
      category: "Work",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;

//https://youtu.be/YVEVrigByKY?t=1725
