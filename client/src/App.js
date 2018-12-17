import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AppSlider from './components/AppSlider';
import AppCard from './components/AppCard';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBack from './components/AppBack';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import {Provider} from 'react-redux'; //in order to integrate the store with the app we need provides which
                                        //is the package that connect react app to the redux clientside
      
                       //in order to use redux in our component we wrap all our components in
                       // the provider that takes in the proprty of store

import store from './store';
import {Container} from 'reactstrap';
// import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>    
      <div className="App">
        <AppNavbar />
        <AppSlider />
        <AppCard />
        <AppBack />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
