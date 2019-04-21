import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import Inbox from "./components/Inbox";
import Message from "./components/Message";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/inbox" component={Inbox}>
          <Route path="/messages/:id" component={Message}/>
        </Route>
      </Router>
    );
  }
}

export default App;
