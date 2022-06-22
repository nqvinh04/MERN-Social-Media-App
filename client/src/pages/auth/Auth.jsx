import React from "react";
import './Auth.css';
import Logo from '../../img/logo.png';

function SignUp(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>
                <div>
                    <input
                        type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstname'
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastname'
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder='Usernames'
                        className='infoInput'
                        name='username'
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder='Password'
                        className='infoInput'
                        name='password'
                    />
                    <input
                        type="text"
                        placeholder='Confirm Password'
                        className='infoInput'
                        name='Confirm Password'
                    />
                </div>
                <div>
                    <span>Already have an account. Login!</span>
                </div>
                <button className="button infoButton"
                        type="submit">Signup</button>
            </form>
        </div>
    )
}

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <SignUp/>
        </div>
    )
}

export default Auth;