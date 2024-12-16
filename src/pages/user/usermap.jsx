import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import vehiIcon from '../../images/bus-stop (1).png';
import "../../style/dashboard.css";
import bus1 from "../../images/bus-1.webp";
import { useLocation } from 'react-router-dom';
import load from "../../images/load.webp";
import { Link } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { MdOutlineContactless } from "react-icons/md";
import { IoHelpCircle } from "react-icons/io5";
import "../../style/navbar.css";
import logo from "../../images/logo.png";

const containerStyle = {
    width: '100%',
    height: '640px'
};

const center = {
    lat: 0,
    lng: 0,
};

const UserMapScreen = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const [currentPosition, setCurrentPosition] = useState(center);
    const [directions, setDirections] = useState(null);
    const [findload, setFindLoad] = useState(true);
    const [disable, setDisable] = useState(false);

    const location = useLocation();
    const passdata = location.state;

    useEffect(() => {
        setCurrentPosition({
            lat: passdata.lat,
            lng: passdata.lng,
        });
    }, []);

    const reload = () => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: passdata.from,
                destination: passdata.to,
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

    const submit = () => {
        setDisable(true);
        setFindLoad(false);
    };


    if (loadError) return <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Error loading Google Maps</div>;
    if (!isLoaded) return <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Loading...</div>;

    const customIcon = {
        url: vehiIcon,
        scaledSize: new window.google.maps.Size(40, 40),
    };


    const homeClick = async () => {
        navigate(`/UserHome/${id}`);
    };


    return (
        <div>

            <div className="navbar">
                <ul className="list">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='user-logo'>
                            <img src={logo} alt="" className="user-logo-img" />
                        </div>
                        <Link to='/UserHome' style={{ textDecoration: 'none' }}>
                            <h5 style={{ margin: 0, padding: 0, color: 'white' }}>BUS TRACKER</h5>
                        </Link>
                    </span>
                </ul>
                <ul className="list">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <div onClick={() => homeClick()}>
                            <MdHome className="icon-2" />
                        </div>
                        <Link to='/'>
                            <MdOutlineContactless className="icon-2" />
                        </Link>
                        <Link to='/'>
                            <IoHelpCircle className="icon-2" />
                        </Link>
                        <Link to='/'>
                            <IoIosSearch className="icon-2" />
                        </Link>
                        <Link to='/'>
                            <IoMdNotifications className="icon-2" />
                        </Link>
                        <Link to='/'>
                            <ImSwitch className="icon-2" />
                        </Link>
                    </span>
                </ul>
            </div>

            <div className="home" style={{ paddingTop: '1rem' }}>

                <div className="card-1">

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                        <div style={{ width: '80%' }}>
                            <div>
                                <h4 style={{ padding: 0, margin: 0, textTransform: 'uppercase' }}>BUS NUMBER : {passdata.busnumber}</h4>
                            </div>
                            <div style={{ marginTop: '0.5rem' }}>
                                <h4 style={{ padding: 0, margin: 0, textTransform: 'uppercase' }}>CENTER : {passdata.startplace}</h4>
                            </div>
                        </div>

                        <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={bus1} alt="" className="choosed-img" />
                        </div>
                    </div>
                    <hr></hr>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', justifyContent: 'center' }}>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                            <label style={{ fontSize: '0.9rem' }}>From :</label>
                        </div>
                        <div style={{ width: '70%' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'darkblue' }}>{passdata.from}</label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', justifyContent: 'center' }}>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                            <label style={{ fontSize: '0.9rem' }}>To :</label>
                        </div>
                        <div style={{ width: '70%' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'darkblue' }}>{passdata.to}</label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', justifyContent: 'center' }}>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                            <label style={{ fontSize: '0.9rem' }}>Start Date :</label>
                        </div>
                        <div style={{ width: '70%' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'darkblue' }}>{passdata.date}</label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', justifyContent: 'center' }}>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                            <label style={{ fontSize: '0.9rem' }}>Start Time :</label>
                        </div>
                        <div style={{ width: '70%' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'darkblue' }}>{passdata.time}</label>
                        </div>
                    </div>
                    <hr style={{ marginTop: '1rem' }}></hr>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
                        <label style={{ fontSize: '0.9rem', color: 'green', fontWeight: 'bold' }}>Current Location : [ lat: {passdata.lat} , lng: {passdata.lng} ]</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
                        <div className='btn-loc-reload' onClick={reload}>
                            <p style={{ margin: 0, padding: 0, fontSize: '0.8rem', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>RELOAD</p>
                        </div>
                    </div>
                    <hr style={{ marginTop: '1rem' }}></hr>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
                        {disable ?
                            <div className='btn-loc-submit-disable'>
                                <p style={{ margin: 0, padding: 0, fontSize: '0.8rem', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Wait...</p>
                            </div>
                            :
                            <div className='btn-loc-submit' onClick={submit}>
                                <p style={{ margin: 0, padding: 0, fontSize: '0.8rem', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>FIND ARRIVAL TIME</p>
                            </div>
                        }
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
                        <div style={{ padding: '1rem' }}>
                            {
                                findload ?
                                    <div style={{ height: '50px', width: '50px' }}>
                                        <img src={load} alt="" className="loading-pic" />
                                    </div>
                                    :
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>BUS ARRIVAL TIME : 5.00 AM</label>
                            }
                        </div>
                    </div>

                </div>

                <div className="card-2">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={currentPosition}
                        zoom={10}
                    >
                        <Marker position={currentPosition} icon={customIcon} />
                        {directions && <DirectionsRenderer directions={directions} />}
                    </GoogleMap>
                </div>

            </div>

        </div>
    );

};

export default UserMapScreen;
