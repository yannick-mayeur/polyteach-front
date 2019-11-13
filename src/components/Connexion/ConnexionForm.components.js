import React from 'react';

<<<<<<< HEAD
export default function ConnexionForm(props) {
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
                            <form className="login-form">
                                <input type="text" placeholder="firstname.lastname@umontpellier.fr" />
                                <input type="password" placeholder="password" />
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
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
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

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionForm);
>>>>>>> Create connexion form
