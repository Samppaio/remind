import React from "react";
import "../Header/styles.css";
import { HiPlus } from "react-icons/hi";

export function Header({handleOpenNewTaskModal}) {

  return(
    <header>
      <div className="header-content">
        <h1>Remind!</h1>
        <button 
          type="button"
          className="button-new-task"
          onClick={handleOpenNewTaskModal}
        >Nova tarefa <HiPlus className="icon"/></button>
      </div>
    </header>
  )
}