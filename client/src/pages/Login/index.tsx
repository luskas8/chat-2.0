import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {v4 as uuid } from 'uuid';
// import { AiFillHeart } from 'react-icons/ai';

import './styles.css';

function Login() {
    const id = uuid();
    const history = useHistory();

    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        localStorage.setItem('user_name', username);
        localStorage.setItem('user_id', id);
        history.push('/dashboard');
    }
    
    return (
        <div className="container">
            <div className="content">
                <div className="welcome">
                    <h1>Bem-Vindo,</h1>
                    <h3>Ao lugar para se conectar com seus amigos</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="login">
                        <h1>Fazer login</h1>
                        <div className="input-block">
                            <input
                                placeholder="Usuário"
                                type="text"
                                id="username"
                                value={username}
                                onChange={evt => {setUsername(evt.target.value)}}
                                required
                            />
                        </div>
                        {/* <div className="input-block">
                            <input
                                placeholder="Senha"
                                type="password"
                                id="password"
                                value={password}
                                onChange={evt => {setPassword(evt.target.value)}}
                                required
                            />
                        </div>
                        <div className="span">
                            <a href="#">Esqueci minha senha</a>
                        </div> */}

                        <button type="submit">Enviar</button>
                    </div>
                </form>

                {/* <div className="messages">
                    <div className="cadastro">
                        <p>Não tem conta?</p>
                        <a href="#">Cadastre-se</a>
                    </div>
                    <div className="message">
                        <p>É de graça</p>
                        <AiFillHeart color="#8257E5" size={16} />
                    </div>
                </div> */}
            </div>
            <div className="marca"></div>
        </div>
    )
}

export default Login;