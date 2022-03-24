import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);

  return(
    <div className="main">
      <Header handleOpenNewTaskModal={() => setNewTaskModalOpen(true)} />
      <TaskList 
        tasks={tasks}
        setTasks={setTasks}
      />
      <NewTaskModal
        tasks={tasks}
        setTasks={setTasks}
        isOpen={newTaskModalOpen}
        onRequestClose={() => setNewTaskModalOpen(false)}
      />
    </div>
  )
};