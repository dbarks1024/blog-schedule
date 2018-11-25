import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { setModalOpen } from './actions/postActions';
import Spinner from './components/spinner/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BlogList from './components/BlogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <Spinner />
        <div className='container'>
          <h1>Blog Schedule</h1>
          <Button onClick={this.props.setModalOpen}>New Post</Button>
          <BlogList/>
        </div>
        
      </div>
    );
  }
}

export default connect(null, {setModalOpen})(App);
