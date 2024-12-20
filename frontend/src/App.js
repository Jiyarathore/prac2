import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForms from './components/TaskForms';
import TaskList from './components/TaskList';

function App() {
  const [tasks,setTasks]=useState([]);

  const fetchTasks = async()=>{
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Timer</h1>
      <TaskForms onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
    </div>
  )
}

export default App