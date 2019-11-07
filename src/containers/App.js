import React, { Component } from 'react';

// Components
import Layout from './Layout';
import Footer from '../components/Footer';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Layout />
        <Footer />
      </>
    )
  }
}

export default App; 
