import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import Layout from './Layout';
import Footer from '../components/Footer';
import Navbar from './Navbar';
import Bookmarks from './Bookmarks.container';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        {/* Main conteneur */}
        <Switch>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
        {/* End Main conteneur */}

        <Footer />
      </>
    )
  }
}

export default App; 
