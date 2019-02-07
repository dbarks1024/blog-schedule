import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogListArea from './blogList/BlogListArea';
import Settings from './components/settings/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavBar/>
          <div className='container'>
            <Route exact path='/' component={BlogListArea} />
            <Route path='/settings' component={Settings} />
          </div>  
        </div>    
      </Router> 
    );
  }
}

export default connect(null, {})(App);
