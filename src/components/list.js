import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actionCreators';

function List({tasks, deleteTask}) {
  console.log(tasks);
  if (!tasks.length) {
    return <h1>Agrega una tarea</h1>;
  }

  return (
    <div>
      {
        tasks.map(task => 
          <div key={task.title}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchProps = dispatch => {
  return {
    deleteTask(task) {
      dispatch(deleteTask(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchProps)(List);
