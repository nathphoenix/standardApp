import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AppSlider from './components/AppSlider'
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppSlider />
      </div>
    );
  }
}

export default App;
