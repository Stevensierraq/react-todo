import React, { Component } from 'react';

import Header from './components/header';
import Form from './components/form';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <div>
        <Header  
          isAuth={false}
        />
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
