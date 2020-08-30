import React from 'react';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHeader from '../../components/PageHeader/PageHeader';

import backgroundImg from '../../assets/images/backgroundLogin.jpg'
import './styles.css'
import { Link } from 'react-router-dom';

function LoginPage() {

    function handleForgotPass(){
        alert('Sorry, we can\'t help. Talk with the administrator or try to access the next page without the username and password corrects. :)');
    }

    return (
        <div className="page-login">
            <PageHeader />

            <div id="content">
                <img src={backgroundImg} id="backgroundLogin"/>

                <form>
                    <fieldset>
                        <legend>Login</legend>

                        <div className="inputBox">
                            <label>Username</label>
                            <input type='text'/>
                        </div>

                        <div className="inputBox">
                            <label>Password</label>
                            <input type='text'/>
                        </div>

                        <div className="buttonBox">
                            <Link to="/admin">
                                <input type='submit' value="Access"/>
                            </Link>
                            <button onClick={handleForgotPass}>Forgot the pass?</button>
                        </div>
                    </fieldset>
                </form>

            </div>
            <PageFooter />
        </div>
    );
}

export default LoginPage;
