import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;