import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// ROUTER
import { withRouter } from "react-router-dom";

// Action
import { login } from '../../store/actions/connexion.action'

class ConnexionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password).then(() => {
            this.props.history.push("/");
        })

    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="courseShowcase">
                        <div className="login-page">
                            <div className="row mt-3">
                                <img src="../../static/images/PolyTeach_Logo_RGB.png" className="logohead" />
                            </div>
                            <div className="form">
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <p className="errorlogin mb-2">{this.props.errMessage}</p>
                                    <input type="text" placeholder="firstname.lastname@umontpellier.fr" onChange={this.handleChangeEmail} />
                                    <input type="password" placeholder="password" onChange={this.handleChangePassword} />
                                    <button className="loginbutton">login</button>
                                    <p className="message">Not registered? <Link to="/signup"> Create an account</Link></p>
                                    <button className="umloginbutton mt-5">login using UM2 - CAS</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return { errMessage: state.login.errConnection };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnexionForm));
