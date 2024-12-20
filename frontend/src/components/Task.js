import React from 'react';
import axios from 'axios';

const Task = ({ task, onTaskUpdated }) => {
  const toggleTimer = async () => {
    const updatedTask = {
      ...task,
      isRunning: !task.isRunning,
    };
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, updatedTask);
    onTaskUpdated();
  };

  const markComplete = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { isRunning: false, elapsedTime: 0 });
    onTaskUpdated();
  };

  return (
    <div>
      <h3>{task.name}</h3>
      <p>Time: {task.elapsedTime}s</p>
      <button onClick={toggleTimer}>{task.isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={markComplete}>Complete</button>
    </div>
  );
};

export default Task;
