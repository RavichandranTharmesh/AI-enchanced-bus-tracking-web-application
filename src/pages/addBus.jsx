import React, { useState } from "react";
import Navbar from '../components/navbar';
import axios from 'axios';
import "../style/addBus.css";

const AddBus = () => {

    const [busnumber, setBusnumber] = useState('');
    const [busname, setBusname] = useState('');
    const [busmodal, setBusmodal] = useState('');
    const [busactive, setBusactive] = useState('');

    const [disable, setDiasble] = useState(false);


    const send = async (e) => {

        e.preventDefault();
        setDiasble(true);

        try {

            const postdata = {
                "busnumber": busnumber,
                "busname": busname,
                "busmodal": busmodal,
                "active": busactive
            };

            const res = await axios.post('http://localhost:5001/api/addbus', postdata, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const resdata = await res.data;
            console.log(resdata);

            alert('Bus Successfully Registered!');
            window.location.reload();

        } catch (error) {
            console.log('Main Error', error);
            alert('Bus Register Failed ! Try again');
            setDiasble(false);
        }

    };


    return (
        <div>
            <Navbar />

            <div className='addbus-main'>
                <div className="addbus-card">

                    <div>
                        <h1 className="signupTitle" style={{ textAlign: 'center' }}>BUS REGISTER</h1>
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Bus Number"
                            onChange={(e) => setBusnumber(e.target.value)}
                            value={busnumber}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Bus Name"
                            onChange={(e) => setBusname(e.target.value)}
                            value={busname}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Bus Modal"
                            onChange={(e) => setBusmodal(e.target.value)}
                            value={busmodal}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Active Status ( yes/no )"
                            onChange={(e) => setBusactive(e.target.value)}
                            value={busactive}
                        />
                    </div>

                    <div className='addbus-button'>
                        {
                            disable ?
                                <button className="submit" style={{ backgroundColor: '#f5619c' }}>wait..</button>
                                :
                                <button className="submit" onClick={send}>Register</button>
                        }
                    </div>

                </div>
            </div>

        </div>
    )

};

export default AddBus;
