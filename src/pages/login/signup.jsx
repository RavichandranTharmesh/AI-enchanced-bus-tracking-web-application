import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../style/login.css";

const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [contact, setContact] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);


    const send = async (e) => {
        e.preventDefault();

        try {

            const postdata = {
                "name": name,
                "nic": nic,
                "contact": contact,
                "username": username,
                "password": password,
                "dpImage": image
            };

            const res = await axios.post('http://localhost:5001/api/signup', postdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            const resdata = await res.data;
            console.log(resdata);

            alert('Signup Successfully !')
            navigate('/');

        } catch (error) {
            console.log('Main Error', error);
            alert('Signup Failed ! Try again')
            window.location.reload();
        }

    };


    return (
        <div className="login">

            <div className="signup-wrapper">
                <div className="left">
                    <h1 className="signupTitle">SIGNUP</h1>

                    <input type="text" placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input type="text" placeholder="NIC"
                        onChange={(e) => setNic(e.target.value)}
                        value={nic}
                    />
                    <input type="text" placeholder="Contact"
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                    />
                    <input type="text" placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input type="text" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <h5 style={{ margin: 0, padding: 0 }}>Add profile image</h5>
                    <input type="file" accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <button className="submit" onClick={send}>Signup</button>
                </div>
            </div>

        </div>
    );

};

export default Signup;