import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink, Switch,Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About';
import MyProfile from './MyProfile';
import Products from './Products';
import Product from './Product';


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header className="header">
            <div className='headerLink'>
              <NavLink exact className="link" to="/" activeStyle={{textDecoration:'underline'}}>Home</NavLink>
              <NavLink className="link" to="/about-us" activeStyle={{textDecoration:'underline'}}>About us</NavLink>
              <NavLink className="link" to="/my-profile" activeStyle={{textDecoration:'underline'}}>My Profile</NavLink>
              <NavLink className="link" to="/products" activeStyle={{textDecoration:'underline'}}>Products</NavLink>
            </div>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path={"/products","/goods"} component={Products} />
            <Route path="/product/:id" component={Product} />
            <Route component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
