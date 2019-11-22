import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// ROUTER
import { withRouter } from "react-router-dom";

// Action
import { signup } from '../../store/actions/connexion.action'

class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            class:'IG3',
        }
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleChangeClass = (event) => {
        this.setState({ class: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state.email, this.state.password, this.state.class).then(() => {
            this.props.history.push("/connexion");
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
                                    <label className="mr-4">Your class:</label>
                                    <select name="pets" id="pet-select" className="mb-4" onChange={this.handleChangeClass}>
                                        <option value="IG3" defaultValue>IG3</option>
                                        <option value="IG4">IG4</option>
                                        <option value="IG5">IG5</option>
                                    </select>
                                    <button className="loginbutton">Sign up</button>
                                    <p className="message">Already registered ? <Link to="/connexion"> Connect to your account</Link></p>
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
    return { errMessage: state.login.errSignup };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signup }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));

