import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

const Login = () => {
    return (
        <>
            <h1>Easyjus</h1>
            <p>Faça peças de qualidade para seus processos judiciais</p>
            <Link to={'/forms'}>
                <span>
                    <FiLogIn />
                </span>
                <strong className={'buttonText'}>
                    Entrar
                </strong>
            </Link>
        </>
    );
}

export default Login;