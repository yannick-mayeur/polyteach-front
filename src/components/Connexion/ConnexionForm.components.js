import React, {useState} from 'react';
import { useInput } from '../utils/form/useInput';

export default function ConnexionForm(props) {
    const { value:email, bind:bindEmail, reset:resetEmail} = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${email} ${password}`)
    }
    return (
        <>
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
        </>
    )
}
