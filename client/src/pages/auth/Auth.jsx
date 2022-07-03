import React, {useState} from "react";
import './Auth.css';
import Logo from '../../img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {logIn, signUp} from "../../actions/AuthActions";
import authReducer from "../../reducers/authReducer";

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        password: "",
        confirmpass: "",
        username: ""
    }
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            data.password === data.confirmpass
                ? dispatch(signUp(data))
                : setConfirmPass(false);
        }else{
            dispatch(logIn(data));
        }
    }

    const resetFrom = () => {
        setConfirmPass(true);
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmpass: "",
            username: ""
        })
    }

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
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Register" : "Log In"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='infoInput'
                                name='firstname'
                                onChange={handleChange}
                                value={data.firstname}
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className='infoInput'
                                name='lastname'
                                onChange={handleChange}
                                value={data.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            placeholder='Usernames'
                            className='infoInput'
                            name='username'
                            onChange={handleChange}
                            value={data.username}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder='Password'
                            className='infoInput'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                placeholder='Confirm Password'
                                className='infoInput'
                                name='confirmpass'
                                onChange={handleChange}
                            />
                        )}
                    </div>
                    <span style={{
                        display: confirmPass ? "none" : "block",
                        color: 'red',
                        fontSize: '12px',
                        alignSelf: 'flex-end',
                        marginRight: '5px'
                    }}>
                            * Confirm Password is not same
                        </span>
                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer"}}
                              onClick={()=> {setIsSignUp((prev)=>!prev); resetFrom()}}>
                            {isSignUp
                            ? "Already have an account. Login!"
                            : "Don't have an account? Sign Up"}
                        </span>
                    </div>
                    <button className="button infoButton"
                            type="submit"
                            disabled={loading}
                    >
                        {loading ? "loading..." : isSignUp ? "Register" : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Auth;