import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import signup from "../../images/signup.webp";
import admin from "../../images/admin.png";
import "../../style/login.css";


const UserLogin = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const send = async (e) => {

        e.preventDefault();

        if (username) {
            try {

                const res = await axios.get('http://localhost:5001/api/findUser/' + username);
                const resdata = await res.data;

                if (resdata.length === 0) {
                    alert('Incorrect Username')
                    window.location.reload();
                } else {
                    if (resdata[0] === password) {
                        navigate('/UserHome');
                    } else {
                        alert('Incorrect Password')
                        window.location.reload();
                    }
                }

            } catch (error) {
                console.log('Main Error', error);
                alert('Login Failed ! Try again')
            }

        } else {
            alert('Please Enter Username')
        }

    }


    return (
        <div className="login">
            <h1 className="loginTitle">LOGIN</h1>

            <div className="wrapper">

                <div className="left">
                    <input type="text" placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                    <div>
                        <button className="submit" onClick={send}>Login</button>
                    </div>
                </div>

                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <Link className="loginButton signup" to='/Signup'>
                        <img src={signup} alt="" className="icon" />
                        Signup
                    </Link>
                    <Link className="loginButton admin" to='/AdminLogin'>
                        <img src={admin} alt="" className="icon" />
                        Admin
                    </Link>
                </div>

            </div>
        </div>
    );

};

export default UserLogin;