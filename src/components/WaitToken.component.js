import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action
import { setUser } from '../store/actions/connexion.action';

import S from '../services'

class WaitToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            path: null
        }
    }

    componentDidMount() {
        const code = this.getQueryVariable('code')
        const stateURI = this.getQueryVariable('state')

        const self = this

        if(code && stateURI) {
            if (stateURI == localStorage.getItem(stateURI)) {
                S.connexion.askToken(code)
                .then(function (response) {
                    const accessToken = response.data.access_token
                    const refreshToken = response.data.refresh_token
                    localStorage.setItem("access_token", accessToken)
                    localStorage.setItem("refresh_token", refreshToken)
                    
                    // check if user is already signed up     
                    S.connexion.signup(accessToken)
                    .then(function (response) {
                        const user = response.data
                        self.props.setUser(user)
                        self.setState({
                            redirect: true,
                            path: '/'
                        })
                    })
                })
                .catch(function (err) {
                    self.setState({
                        redirect: true,
                        path: '/connexion'
                    })
                })
            }
        } else {
            self.setState({
                redirect: true,
                path: '/connexion'
            })
        }
    }

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return false
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={this.state.path}></Redirect>)
        }
        return (
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
            )
    }
   
}

const mapStateToProps = state => {
    return { };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitToken);