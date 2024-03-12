import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="tudo-form">
      <h2>Create task:</h2>
      <form action="">
        <input type="text" name="task" placeholder="Task" />
        <select name="" id="">
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="school">School</option>
        </select>
        <button type="submit">Create task</button>
      </form>
    </div>
  );
};

export default TodoForm;
