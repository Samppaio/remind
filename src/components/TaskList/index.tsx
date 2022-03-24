import React, { useEffect } from "react";
import "../TaskList/styles.css";
import { ImBin } from "react-icons/im";

export function TaskList({tasks, setTasks}) {

  useEffect(() => {
    getLocalTasks();
  }, [])

  function getLocalTasks() {
    let localTasks = localStorage.getItem("tasksList");
    if(localTasks === null) {
      localStorage.setItem("tasksList", JSON.stringify([]));
    } else {
      localTasks = JSON.parse(localTasks);
      setTasks(localTasks);
    }
  }
  
  function handleTaskCompleted(id: number) {
    const completedTask = tasks.map(response => response.id === id ? {
      ...response,
      isComplete: !response.isComplete
    } : response);

    setTasks(completedTask);
    localStorage.setItem("tasksList", JSON.stringify(completedTask));
  }

  function handleRemoveTask(id: number) {
    const removedTask = tasks.findIndex(response => response.id === id);
    tasks.splice(removedTask, 1);

    setTasks([...tasks]);
    localStorage.setItem("tasksList", JSON.stringify([...tasks]));
  }

  return(
    <section>
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
    </section>
  );
};