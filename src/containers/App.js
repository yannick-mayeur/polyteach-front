import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import Layout from './Layout';
import Footer from '../components/Footer';
import Navbar from './Navbar';
import Connexion from '../components/Connexion/ConnexionForm.components';
import CourseEditor from '../containers/CourseEditor'
import PlayerLayout from './PlayerLayout.container';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* Main conteneur */}
        <Switch>
        <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/bookmarks">
            <PlayerLayout />
          </Route>
          <Route path="/courseEditor">
            <CourseEditor />
          </Route>
          <Route path="/player">
            <PlayerLayout />
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
