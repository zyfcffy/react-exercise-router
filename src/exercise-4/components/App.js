import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
            <Route component={NotMatch} />
            <Route path='/' component={Home} />
            <Route path='/:user' component={User} />
            <Route path='/about' component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
