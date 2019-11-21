import React from 'react';


export default function ConnexionForm () {

    let state = "state"
    localStorage.setItem("state", state)
    const clientId = "c92bcd96-70e3-480a-8bae-c4d7465e4979"
    //const redirectUri = encodeURI('https://polyteach-staging.igpolytech.fr/oauth')
    const redirectUri = encodeURI('http://localhost:8080/oauth')
    const uri = 'https://oauth.igpolytech.fr/authorize?client_id='+clientId+'&redirect_uri='+redirectUri+'&state='+state

    return (
        <>
            <div className="content">
                <div className="courseShowcase">
                    <div className="login-page">
                        <div className="row mt-3">
                            <img src="../../static/images/PolyTeach_Logo_RGB.png" className="logohead" />
                        </div>
                        <div className="form">
                            <a href={uri} style={{textDecoration:'none', color: 'white'}}>
                                <button className="umloginbutton mt-5" type="button">Login via Polytech</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}
