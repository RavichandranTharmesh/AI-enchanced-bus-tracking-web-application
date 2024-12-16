import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar';
import axios from 'axios';
import "../style/addBus.css";

const Manage = () => {

    const [fetchArray, setFetchArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [disable, setDiasble] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/getlocation');
                const resdata = await res.data;
                setFetchArray(resdata);
                setLoading(false);

            } catch (error) {
                console.log('Main Error', error);
            }
        };

        fetchData();
    }, []);


    const send = async (busnumber) => {

        setDiasble(true);

        try {

            const res = await axios.delete('http://localhost:5001/api/deleteReserve', {
                data: { busnumber },
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resdata = await res.data;
            console.log(resdata);

            alert('Successfully Deleted!');
            window.location.reload();

        } catch (error) {
            console.log('Main Error', error);
            alert('Delete Failed ! Try again');
            setDiasble(false);
        }

    };


    return (
        <div>
            <Navbar />

            {!loading && (
                <div className='addbus-main'>
                    <div className="manage-card">

                        <div>
                            <h2 className="signupTitle" style={{ textAlign: 'center' }}>MANAGE RESERVE</h2>
                        </div>

                        <hr></hr>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 style={{ padding: 0, margin: 0 }}>BUS NUMBER</h5>
                            <h5 style={{ padding: 0, margin: 0 }}>START DATE</h5>
                            <h5 style={{ padding: 0, margin: 0 }}>START TIME</h5>
                            <h5 style={{ padding: 0, margin: 0 }}>ACTION</h5>
                        </div>
                        <hr></hr>

                        {fetchArray.map((item, index) => (
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }} key={index}>
                                <h5 style={{ padding: 0, margin: 0 }}>{item.busnumber}</h5>
                                <h5 style={{ padding: 0, margin: 0 }}>{item.date}</h5>
                                <h5 style={{ padding: 0, margin: 0 }}>{item.time}</h5>

                                {
                                    disable ?
                                        <button className="btn-track" style={{ backgroundColor: '#f5619c' }}>wait..</button>
                                        :
                                        <button className="btn-track" onClick={() => send(item.busnumber)}>Delete</button>
                                }
                            </div>
                        ))}

                    </div>
                </div>
            )}

            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Loading...</div>
            )}

        </div>
    )

};

export default Manage;
