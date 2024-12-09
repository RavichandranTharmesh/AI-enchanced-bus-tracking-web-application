import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { MdOutlineContactless } from "react-icons/md";
import { IoHelpCircle } from "react-icons/io5";
import "../style/navbar.css";
import logo from "../images/logo.png";
import dp from "../images/user1.jpg";


const UserNavbar = ({ name, image, id }) => {

    const navigate = useNavigate();

    const [baseString, setBaseString] = useState(null);

    useEffect(() => {

        const fetchData = () => {
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(image))
            );
            setBaseString(base64String)
        };
        fetchData();

    }, []);


    const homeClick = async () => {
        navigate(`/UserHome/${id}`);
    };


    return (
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

                    <div style={{ marginLeft: '3rem' }}>
                        <h5 style={{ textTransform: 'uppercase' }}>{name}</h5>
                    </div>
                    <div className='admin-dp'>
                        <img src={`data:image/png;base64,${baseString}`} alt="" className="admin-dp-img" />
                    </div>
                </span>
            </ul>
        </div>
    );

};

export default UserNavbar;