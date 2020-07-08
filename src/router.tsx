import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './login/Login';
import Forms from './forms/Forms';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path={'/'} exact/>
            <Route component={Forms} path={'/forms'}/>
        </BrowserRouter>
    );
}

export default Routes;