const addTask = task => {
  return {
    type: 'ADD_TASK',
    task
  };
};

const deleteTask = task => {
  return {
    type: 'DELETE_TASK',
    task
  };
};

export {
  addTask,
  deleteTask
};

