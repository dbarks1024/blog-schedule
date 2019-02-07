import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogListArea from './blogList/BlogListArea';
import Settings from './settings/Settings';
import RequestsList from './requests/RequestsList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavBar/>
          <div className='container'>
            <Route exact path='/' component={BlogListArea} />
            <Route path='/settings' component={Settings} />
            <Route path='/requests' component={RequestsList} />
          </div>  
        </div>    
      </Router> 
    );
  }
}

export default App;
