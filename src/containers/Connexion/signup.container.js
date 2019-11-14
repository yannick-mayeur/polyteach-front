import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import { signup } from '../../components/Connexion/Signup.component'; 

class Signup extends Component {
    handleSignup(email, password) {
        console.log("signup");
    }

    render() {
        return <Signup signup={this.handleSignup}/>
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);