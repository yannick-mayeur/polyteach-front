import React, { Component } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function ConnexionForm(props) {
    const { value:email, bind:bindEmail, reset:resetEmail} = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
=======
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action
import { login } from '../../store/actions/connexion.action'

class ConnexionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
>>>>>>> Connection connect to the store

    }
<<<<<<< HEAD
    return (
        <>
<<<<<<< HEAD
            <div className="content">
                <div className="courseShowcase">
                    <div className="login-page">
                        <div className="row mt-3">
                            <img src="../../static/images/PolyTeach_Logo_RGB.png" className="logohead" />
                        </div>
                        <div className="form">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <input type="text" placeholder="firstname.lastname@umontpellier.fr" {...bindEmail} />
                                <input type="password" placeholder="password" {...bindPassword}/>
                                <button className="loginbutton">login</button>
                                <p className="message">Not registered? <a href="#">Create an account</a></p>
                                <button className="umloginbutton mt-5">login using UM2 - CAS</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
=======
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>

                <label>Password
                    <input type="text" name="name" />
                </label>

                <input type="submit" value="Envoyer" />
            </form>
>>>>>>> Create form connexion
        </>
    )
}
=======
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { login } from '../../store/actions/connexion.action';

class ConnexionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            mdp: ''
        };
    }

    handleChangeLogin = (event) => {
        this.setState({...this.state, value: event.target.value });
    }
    handleChangeMdp = (event) => {
        this.setState({...this.state, mdp: event.target.value });
    }

    handleSubmit = () => {
        event.preventDefault();
        this.props.login("nomdefautl", "mdpDefault")
    }

    render() {
        return (
            <div className="content">
                <div className="courseShowcase">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Login
                            <input value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Mot de passe
                            <input value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </div>
        );
    }
}
=======

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login (this.state.email, this.state.password)
        alert(`Submitting Name ${this.state.email} ${this.state.password}`)
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
                                    <input type="text" placeholder="firstname.lastname@umontpellier.fr" onChange={this.handleChangeEmail} />
                                    <input type="password" placeholder="password" onChange={this.handleChangePassword} />
                                    <button className="loginbutton">login</button>
                                    <p className="message">Not registered? <a href="#">Create an account</a></p>
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
>>>>>>> Connection connect to the store

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionForm);
<<<<<<< HEAD
>>>>>>> Create connexion form
=======
>>>>>>> Connection connect to the store
