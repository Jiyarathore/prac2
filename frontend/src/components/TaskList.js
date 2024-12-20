import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskUpdated }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onTaskUpdated={onTaskUpdated} />
      ))}
    </div>
  );
};

export default TaskList;
