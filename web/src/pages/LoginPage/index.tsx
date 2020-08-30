import React, { useState, FormEvent } from 'react';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHeader from '../../components/PageHeader/PageHeader';

import backgroundImg from '../../assets/images/backgroundLogin.jpg'
import './styles.css'
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginCorrect, setLoginCorrect] = useState(false);
    const [wrongPassText, setWrongPassText] = useState(0);

    function handleForgotPass(){
        alert('Sorry, we can\'t help. Talk with the administrator or try to access the next page without the username and password corrects. :)');
    }

    function handleIsLoginCorrect(e: FormEvent){
        e.preventDefault();

        if(username===''){
            alert('Nothing at username area.');
        }else if(password===''){
            alert('Nothing at password area.');
        }else{
            api.get('?username='+encodeURIComponent(username)+'&password='+encodeURIComponent(password)).then(response => {
                const {success} = response.data;
                setLoginCorrect(success);
                if(success===0){
                    setUsername('');
                    setPassword('');
                    setWrongPassText(wrongPassText+1);
                }
            })
        }
    }

    return (
        <div className="page-login">
            <PageHeader />

            <div id="content">
                <img src={backgroundImg} id="backgroundLogin" alt="girl showing a padlock"/>

                <div id="loginBox">
                    <form onSubmit={handleIsLoginCorrect}>
                        <fieldset>
                            <legend>Login</legend>

                            <div className="inputBox">
                                <label>Username</label>
                                <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                            </div>

                            <div className="inputBox">
                                <label>Password</label>
                                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>

                            <div className="buttonBox">
                                {loginCorrect? <Redirect to={{pathname:"/admin", state:{success: loginCorrect}}} /> : <div></div>}
                                <input type='submit' value="Access"/>
                                <button onClick={handleForgotPass}>Forgot the password?</button>
                            </div>
                        </fieldset>
                    </form>
                    {wrongPassText===0? <p></p>:<p id='wrongPass'>Wrong username or password. Times wrong: {wrongPassText}</p>}
                </div>
            </div>

            <PageFooter />
        </div>
    );
}

export default LoginPage;
