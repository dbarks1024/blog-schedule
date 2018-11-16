import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogList from './components/BlogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <h1>hello</h1>
        <BlogList/>
      </div>
    );
  }
}

export default App;
