import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || [])

  const addTask = (task) => {
    setTasks((prevTask) => {
      const newTasks = [...prevTask, task];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  }

  const completeTask = (id, status) => {
    const task = tasks.find((task) => task.id === id)
    const newTask = {...task, completed: status};
    const newTasks = tasks.map((task) => {
      if (task.id === id) return newTask
      else return task;
    })
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) =>
      task.id !== id
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <div className='App'>
      <Tasks
        tasks={tasks}
        showAdd={showAddTask}
        onShowAdd={setShowAddTask}
        onComplete={completeTask}
        onDelete={deleteTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}
    </div>
  )
}

export default App
