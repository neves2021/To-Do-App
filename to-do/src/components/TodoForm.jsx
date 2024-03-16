import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Create task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Task"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="School">School</option>
        </select>
        <button type="submit">Create task</button>
      </form>
    </div>
  );
};

export default TodoForm;
