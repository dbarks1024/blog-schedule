import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModalOpen } from './actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogList from './components/BlogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <div className='container'>
          <BlogList/>
        </div>
        
      </div>
    );
  }
}

export default connect(null, {setModalOpen})(App);
