import React from 'react';

export default function ConnexionForm(props) {
    return (
        <>
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
        </>
    )
}
