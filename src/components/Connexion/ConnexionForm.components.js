import React from 'react';

export default function ConnexionForm(props) {
    return (
        <>
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
        </>
    )
}