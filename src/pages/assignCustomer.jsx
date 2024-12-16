import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import vehiIcon from '../images/bus-stop (1).png';
import Navbar from '../components/navbar';
import axios from 'axios';
import "../style/dashboard.css";

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 0,
    lng: 0,
};


const AssignCustomer = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const [currentPosition, setCurrentPosition] = useState(center);
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [directions, setDirections] = useState(null);

    const [disable, setDiasble] = useState(false);

    const [ic, setIc] = useState('');
    const [busnumber, setBusnumber] = useState('');
    const [startplace, setStartPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => console.error("Error getting location: ", error),
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }, []);


    const handleRoute = () => {

        if (!fromLocation || !toLocation) {
            alert("Please enter both From and To locations!");
            return;
        }

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: fromLocation,
                destination: toLocation,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    alert("Failed to fetch directions: " + status);
                }
            }
        );
    };

    const save = async () => {

        const nowdate = new Date();
        const nowtime = nowdate.toLocaleTimeString();

        setDiasble(true);

        try {

            const postdata = {
                "ic": ic,
                "busnumber": busnumber,
                "startplace": startplace,
                "from": fromLocation,
                "to": toLocation,
                "date": date,
                "time": time,
                "lat": currentPosition.lat,
                "lng": currentPosition.lng,
                "status": 0,
            };

            const res = await axios.post('http://localhost:5001/api/addreserve', postdata, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resdata = await res.data;
            console.log('resdata first :', resdata);

            // res - 2
            const postdata2 = {
                "busnumber": busnumber,
                "date": date,
                "time": time,
                "lat": currentPosition.lat,
                "lng": currentPosition.lng,
                "lastupdate": nowtime,
                "status": 0,
            };

            const res2 = await axios.post('http://localhost:5001/api/addlocation', postdata2, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resdata2 = await res2.data;
            console.log('resdata two :', resdata2)
            //

            alert('Reserve Successfully Saved!');
            window.location.reload();

        } catch (error) {
            console.log('Main Error', error);
            alert('Reserve Save Failed ! Try again');
            setDiasble(false);
        }

    };


    if (loadError) return <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Error loading Google Maps</div>;
    if (!isLoaded) return <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Loading...</div>;

    const customIcon = {
        url: vehiIcon,
        scaledSize: new window.google.maps.Size(40, 40),
    };


    return (
        <div>
            <Navbar />

            <div className="home" style={{ paddingTop: '1rem' }}>

                <div className="card-1">
                    <div>
                        <h2 className="signupTitle" style={{ textAlign: 'center' }}>CUSTOMER RESERVE</h2>
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Customer NIC"
                            onChange={(e) => setIc(e.target.value)}
                            value={ic}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Bus Number"
                            onChange={(e) => setBusnumber(e.target.value)}
                            value={busnumber}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="Center"
                            onChange={(e) => setStartPlace(e.target.value)}
                            value={startplace}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="From" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />
                    </div>

                    <div className='addbus-input'>
                        <input type="text" placeholder="To" value={toLocation} onChange={(e) => setToLocation(e.target.value)} />
                    </div>

                    <div className='addbus-input'>
                        <input type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>

                    <div className='addbus-input'>
                        <input type="time"
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                        />
                    </div>

                    <div className='assigncustomer-btn'>
                        <button className="assign-submit-btn" onClick={handleRoute}>ADD</button>
                        {
                            disable ?
                                <button className="assign-submit-btn-2" style={{ backgroundColor: 'rgb(8, 171, 8)' }}>wait..</button>
                                :
                                <button className="assign-submit-btn-2" onClick={save}>SAVE</button>
                        }
                    </div>
                </div>

                <div className="card-2">
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4 style={{ margin: 0, padding: 0, color: 'darkblue' }}>Journey - [ {fromLocation} To {toLocation} ]</h4>
                    </div>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={currentPosition}
                        zoom={15}
                    >
                        <Marker position={currentPosition} icon={customIcon} />
                        {directions && <DirectionsRenderer directions={directions} />}
                    </GoogleMap>
                </div>

            </div>
        </div>
    );

};

export default AssignCustomer;
