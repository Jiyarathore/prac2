import React, { useState } from 'react';
import axios from 'axios';

const TaskForms = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');

  const addTask = async () => {
    const response = await axios.post('http://localhost:5000/api/tasks', { name: taskName });
    onTaskAdded(response.data);
    setTaskName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForms;
