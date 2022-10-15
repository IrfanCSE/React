import React from 'react'
import UserInput from '../UserInput/UserInput';

function Header({ changeState }) {

    return (
        <>
            <div className="row m-1 p-4">
                <div className="col">
                    <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                        <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                        <u>My Todo-s</u>
                    </div>
                </div>
            </div>

            <UserInput changeState={changeState}></UserInput>
        </>
    )
}

export default Header;