import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogListArea from './components/BlogListArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <div className='container'>
          <BlogListArea/>
        </div>
        
      </div>
    );
  }
}

export default connect(null, {})(App);
