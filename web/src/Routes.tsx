import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SuccessPage from './pages/SucessPage';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
            <Route path="/admin" component={SuccessPage} />
        </BrowserRouter>
    )
}

export default Routes;