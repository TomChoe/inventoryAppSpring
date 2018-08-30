import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Inventory from './components/Inventory';
import AddForm from './components/AddForm';

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      	  <Route exact path="/" component={Home} />
      	  <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/add" component={AddForm} />
      	  <Route path="*" component={() => <div>No matching Route!</div>} />
      	</Switch>
      </Router>
    );
  }
}

export default App;