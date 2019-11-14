import React from 'react';

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

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionForm);