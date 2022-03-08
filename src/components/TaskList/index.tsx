import React, { useEffect } from "react";
import "../TaskList/styles.css";
import { ImBin } from "react-icons/im";

export function TaskList({tasks, setTasks}) {

  useEffect(() => {
    getLocalTasks();
  }, [])

  function getLocalTasks() {
    let locaTasks = localStorage.getItem("tasksList");
    if(locaTasks === null) {
      localStorage.setItem("tasksList", JSON.stringify([]));
    } else {
      locaTasks = JSON.parse(locaTasks);
      setTasks(locaTasks);
    }
  }
  
  function handleTaskCompleted(id: number) {
    const completedTask = tasks.map(response => response.id === id ? {
      ...response,
      isComplete: !response.isComplete
    } : response);

    setTasks(completedTask);
  }

  function handleRemoveTask(id: number) {
    const removedTask = tasks.filter(response => response.id !== id);

    setTasks(removedTask);
  }

  return(
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div className={task.isComplete ? 'completed' : ''}>
            <label className="task-list">
              <input 
                type="checkbox"
                className="checkbox"
                readOnly
                checked={task.isComplete}
                onClick={() => handleTaskCompleted(task.id)}
                />
              <p>{task.title}</p>
              <button type="button" className="delete" onClick={() => handleRemoveTask(task.id)}><ImBin className="icon"/></button>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};