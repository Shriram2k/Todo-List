import List from "./List";
import { useState } from "react";

const ItemBar = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAdd = () => {
    if (!newTask.trim() || !newDescription.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }

    let newList = {
      id: list.length + 1,
      title: newTask.trim(),
      description: newDescription.trim(),
      completed: false,
    };

    setList([...list, newList]);
    setNewTask("");
    setNewDescription("");
  };

  return (
    <>
      <div className="content">
        <div className="item-bar">
          <div className="item">
            <h2>Title:</h2>
            <input
              type="text"
              value={newTask}
              placeholder="What do you want to do?"
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className="item">
            <h2>Description:</h2>
            <input
              type="text"
              value={newDescription}
              placeholder="Tell me about it briefly"
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      <List task={list} setList={setList} />
    </>
  );
};

export default ItemBar;
