import { useState } from "react";
import { data } from "react-router";

const Profile = () => {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState("");

  const addtodo = () => {
    if (newtask.trim() !== "") {
      settask([...task, newtask]);
    }
  };
  console.log(task);

  return (
    <div>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewtask(e.target.value)}
        className="inputTodo"
      />
      <button onClick={addtodo}>Add</button>
      <ul>
        {task.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};
export default Profile;
