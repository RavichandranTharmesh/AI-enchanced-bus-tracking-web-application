import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../style/login.css";


const AdminLogin = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const send = async (e) => {

        e.preventDefault();

        if (username) {
            if (username === 'admin@gmail.com') {
                if (password === '123') {
                    navigate('/Dashboard');
                } else {
                    alert('Incorrect Password');
                    window.location.reload();
                }
            } else {
                alert('Incorrect Username');
                window.location.reload();
            }

        } else {
            alert('Please Enter Username')
        }

    };


    return (
        <div className="login">

            <h1 className="loginTitle">ADMIN LOGIN</h1>

            <div className="admin-wrapper">
                <div className="left">
                    <input type="text" placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div>
                        <button className="submit" onClick={send}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default AdminLogin;