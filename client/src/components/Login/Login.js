import React, { useState } from 'react';
import {
    LoginWrapper,
    LoginLogo,
    LoginContainer,
    LoginContainerInput,
    LoginContainerP,
    LoginRegisterButton,
    LoginSignInButton
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../containers/firebase';
// import logo from './assets/images/logo.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //this will stop the refresh
        //do login logic 
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //logged in, redirect to home page
            if (auth) {
                history.push('/');
            }
        })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault(); //this will stop the refresh
        //do register logic

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // console.log(auth);
                if (auth) {
                    history.push('/');
                }
                //created a user and logged in, redirect to the home page
            })
            .catch(e => alert(e.message))

    }
    return (
        <LoginWrapper>
            <Link to="/">
                <LoginLogo
                    src={"logo"}
                    alt="Logo"
                />
            </Link>
            <LoginContainer>
                <h1 style={{
                    fontWeight: "500",
                    marginBottom: " 20px",
                    margin: "auto"
                }}>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <LoginContainerInput>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} style={{
                            height: "30px",
                            marginBottom: "10px",
                            backgroundColor: "white",
                            width: "98%",
                        }} />
                    </LoginContainerInput>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" style={{
                        height: "30px",
                        marginBottom: "10px",
                        backgroundColor: "white",
                        width: "98%",
                    }} />
                    <LoginSignInButton onClick={signIn} type="submit">
                        Sign in
                    </LoginSignInButton>

                    <LoginContainerP>
                        By signing-in you agree to Afriboutiue's conditions of use & sale. Please see our Privacy Notice, our Cookies Notice
                        and our interest-Based Ads Notice.
                   </LoginContainerP>
                    <LoginRegisterButton onClick={register} className="login__registerButton">Create Account</LoginRegisterButton>
                </form>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default Login
