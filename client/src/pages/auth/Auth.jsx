import React, {useState} from "react";
import './Auth.css';
import Logo from '../../img/logo.png';

// function SignUp(stateAuth){
//     console.log(11111, stateAuth)
//     return(
//         <div className="a-right">
//             <form className="infoForm authForm">
//                 <h3>{stateAuth.isSignUp ? "Sign up" : "Log In"}</h3>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='First Name'
//                         className='infoInput'
//                         name='firstname'
//                     />
//                     <input
//                         type="text"
//                         placeholder='Last Name'
//                         className='infoInput'
//                         name='lastname'
//                     />
//                 </div>
//
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='Usernames'
//                         className='infoInput'
//                         name='username'
//                     />
//                 </div>
//
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='Password'
//                         className='infoInput'
//                         name='password'
//                     />
//                     <input
//                         type="text"
//                         placeholder='Confirm Password'
//                         className='infoInput'
//                         name='Confirm Password'
//                     />
//                 </div>
//                 <div>
//                     <span>Already have an account. Login!</span>
//                 </div>
//                 <button className="button infoButton"
//                         type="submit">Signup</button>
//             </form>
//         </div>
//     )
// }

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    // const stateAuth = {
    //     isSignUp: isSignUp
    // }

    return (
        <div className="Auth">
            {/*Left Side*/}
            <div className="a-left">
                <img src={Logo} alt=""/>
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/*Right Side*/}
            {/*<SignUp stateAuth={stateAuth}/>*/}
            <div className="a-right">
                <form className="infoForm authForm">
                    <h3>{isSignUp ? "Register" : "Log In"}</h3>
                    {isSignUp && (
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
                    )}

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
                        {isSignUp && (
                            <input
                                type="text"
                                placeholder='Confirm Password'
                                className='infoInput'
                                name='Confirm Password'
                            />
                        )}
                    </div>
                    <div>
                        <span>{isSignUp
                            ? "Already have an account. Login!"
                            : "Don't have an account? Sign Up"}</span>
                    </div>
                    <button className="button infoButton"
                            type="submit">
                        {isSignUp ? "Register" : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Auth;