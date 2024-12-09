import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/dashboard.css";

const DashLeftContent = ({ contentHeading, busArray }) => {

    const navigate = useNavigate();

    const [heading, setHeading] = useState('');
    const [fetchBusArray, setFetchArray] = useState([]);

    useEffect(() => {

        if (contentHeading) {
            setHeading(contentHeading);
        };

        if (busArray) {
            setFetchArray(busArray);
        }

    }, [contentHeading, busArray]);


    const track = async (item) => {
        console.log(item)
        navigate('/MapScreen', { state: item });
    };


    return (

        <div>

            <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ padding: 0, margin: 0, color: 'gray', textAlign: 'center' }}>{heading}</h4>
            </div>

            <hr></hr>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 style={{ padding: 0, margin: 0 }}>BUS NUMBER</h5>
                <h5 style={{ padding: 0, margin: 0 }}>ACTION</h5>
            </div>
            <hr></hr>

            {fetchBusArray.map((item, index) => (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }} key={index}>
                    <h5 style={{ padding: 0, margin: 0 }}>{item.busnumber}</h5>
                    <button className="btn-track" onClick={() => track(item)}>TRACK</button>
                </div>
            ))}

        </div>

    )

};

export default DashLeftContent;
