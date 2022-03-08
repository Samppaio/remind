import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import "../NewTaskModal/styles.css";

export function NewTaskModal({tasks, setTasks, isOpen, onRequestClose}) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    saveLocalTasks();
  }, [tasks])
  
  function handleCreateNewTask() {
    if(!newTaskTitle) {
      alert("Necessário nomear tarefa")

      return
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  function saveLocalTasks() {
    localStorage.setItem("tasksList", JSON.stringify(tasks))
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
      ariaHideApp={false}
    >
      <div className="button-close">
        <button 
          type="button"
          onClick={onRequestClose}
          >
            <GrClose className="icon-close"/>
          </button>
      </div>
      <div className="modal-content">
        <h1>Nova tarefa</h1>
        <hr />
        <input
          type="text"
          placeholder="Não posso esquecer de..."
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <button
          type="submit"
          onClick={handleCreateNewTask}
        >Adicionar</button>
      </div>
    </Modal>
  )
}