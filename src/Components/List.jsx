import { useState } from "react";
import Completed from "../assets/completed.svg";
import Delete from "../assets/delete.svg";
import PropTypes from "prop-types";

const List = ({ task, setList }) => {
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleComplete = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="list-tabs">
        <button
          className={`tab-button ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => handleTabClick("pending")}
        >
          Pending
        </button>
        <button
          className={`tab-button ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => handleTabClick("completed")}
        >
          Completed
        </button>
      </div>
      <div className="task-contents">
        <ul className="task-list">
          {task
            .filter((item) =>
              activeTab === "pending" ? !item.completed : item.completed
            )
            .map((item) => (
              <li key={item.id} className="task-item">
                <div className="lists">
                  <span
                    className={`task-text ${item.completed ? "completed" : ""}`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`task-sub-text ${
                      item.completed ? "completed" : ""
                    }`}
                  >
                    {item.description}
                  </span>
                </div>
                <div className="icons">
                  {!item.completed && (
                    <img
                      src={Completed}
                      className="complete-button"
                      onClick={() => handleComplete(item.id)}
                      alt="Complete"
                    />
                  )}
                  <img
                    src={Delete}
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                    alt="Delete"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default List;

List.propTypes = {
  task: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};
