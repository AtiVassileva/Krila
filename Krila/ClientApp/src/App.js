import React, { Component } from 'react';
import { Route } from 'react-router';
import  Home  from './components/Home/Home';
import { FetchData } from './components/FetchData';

import './custom.css'
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
      <NavMenu/>
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />
        <Footer/>
      </>
    );
  }
}
