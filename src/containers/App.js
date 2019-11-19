import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import Layout from './Layout';
import Footer from '../components/Footer';
import Navbar from './Navbar';
import Connexion from '../components/Connexion/ConnexionForm.components';
import CourseEditor from '../containers/CourseEditor'
import PlayerLayout from './PlayerLayout.container';
import Signup from '../components/Connexion/Signup.component';
import {Dashboard} from '../components/Dashboard/Dashboard';

import {PrivateRoute} from '../components/utils/privateRoute.component';
import Live from './Live.container';
import LiveStudent from "./LiveStudent.container";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* Main conteneur */}
        <Switch>
        <Route path="/dashboard">
            <Dashboard />
          </Route>
        <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/live">
            <Live/>
          </Route>
          <Route path="/livestudent/:sessionId" component={LiveStudent} />
          <Route exact path="/bookmarks">
            <PlayerLayout />
          </Route>
          <Route path="/courseEditor">
            <CourseEditor />
          </Route>
          <Route path="/player">
            <PlayerLayout />
          </Route>
            <PrivateRoute path='/' component={Layout} />
        </Switch>
        {/* End Main conteneur */}

        <Footer />
      </>
    )
  }
}

export default App; 
