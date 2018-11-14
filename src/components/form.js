import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { addTask } from '../actionCreators';

class Form extends Component {

  static initState = {
    title: '',
    description: '',
    alert: false
  }

  state = Form.initState

  handleChange = ({target: {name, value}}) => this.setState({[name]: value});

  handleClose = () => this.setState({alert: false})

  createTask = () => {
    const {title, description} = this.state;
    if (title.length === 0) return 0;

    const exist = this.props.tasks.filter(task => task.title === title).shift();
    if (exist) {
      this.setState({alert: true});
    } else {
      this.props.addTask({
        title,
        description
      });
      this.setState({...Form.initState});
    }

  }

  render() {
    const { 
      title, 
      description,
      alert
    } = this.state;

    return (
      <div>
        Formulario
        <input value={title} name="title" onChange={this.handleChange}/>
        <input value={description} name="description" onChange={this.handleChange}/>
        <Button variant="fab" color="primary" aria-label="Add" onClick={this.createTask}>
          <AddIcon />
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={alert}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<h3 id="message-id">Task already exist :S</h3>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchProps = dispatch => {
  return {
    addTask(task) {
      dispatch(addTask(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Form);
