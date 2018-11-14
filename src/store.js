import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      };
    default: 
      return state;
  }
};

const initState = {
  tasks: []
};

export default createStore(reducer, initState);
