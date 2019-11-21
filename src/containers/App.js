import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import Layout from './Layout';
import Footer from '../components/Footer';
import Navbar from './Navbar';
import Connexion from '../components/Connexion/ConnexionForm.components';
import CourseEditor from '../containers/CourseEditor'
import PlayerContainer from './Player.container';
import Signup from '../components/Connexion/Signup.component';
import {Dashboard} from '../components/Dashboard/Dashboard';
import WaitToken from '../components/WaitToken.component';

import {PrivateRoute} from '../components/utils/privateRoute.component';
import Live from './Live.container';
import LiveStudent from "./LiveStudent.container";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
        <Route path="/oauth">
            <WaitToken />
        </Route>

        <Route path="/connexion">
            <Connexion />
        </Route>

        <PrivateRoute exact path="/live">
            <Live/>
        </PrivateRoute>

        <Route path="/livestudent/:sessionId" component={LiveStudent} />

        <PrivateRoute path="/courseEditor">
            <CourseEditor />
        </PrivateRoute>

        <PrivateRoute path="/player/:courseID" component={PlayerContainer}/>

        <PrivateRoute path='/' component={Layout} />
        </Switch>

        <Footer />
      </>
    )
  }
}

export default App; 
