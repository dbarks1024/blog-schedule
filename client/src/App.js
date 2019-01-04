import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogListArea from './components/BlogListArea';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavBar/>
          <div className='container'>
            <Route exact path='/' component={BlogListArea} />
            <Route path='/address' component={Address} />
          </div>  
        </div>    
      </Router> 
    );
  }
}

const Address = () => <h1>We are located at 555 Jackson St.</h1>;

export default connect(null, {})(App);
