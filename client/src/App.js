import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Inventory from './components/Inventory';

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      	  <Route exact path="/" component={Home} />
      	  <Route exact path="/inventory" component={Inventory} />
      	  <Route path="*" component={() => <div>No matching Route!</div>} />
      	</Switch>
      </Router>
    );
  }
}

export default App;