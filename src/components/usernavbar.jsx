import { Link } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { MdOutlineContactless } from "react-icons/md";
import { IoHelpCircle } from "react-icons/io5";

import "../style/navbar.css";
import dp from "../images/dp-admin-2.webp";
import logo from "../images/logo.png";

const UserNavbar = () => {

    return (
        <div className="navbar">
            <ul className="list">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='user-logo'>
                        <img src={logo} alt="" className="user-logo-img" />
                    </div>
                    <Link to='/UserHome' style={{textDecoration: 'none'}}>
                        <h5 style={{ margin: 0, padding: 0, color: 'white'}}>BUS TRACKER</h5>
                    </Link>
                </span>
            </ul>
            <ul className="list">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/UserHome'>
                        <MdHome className="icon-2" />
                    </Link>
                    <Link to='/UserHome'>
                        <MdOutlineContactless className="icon-2" />
                    </Link>
                    <Link to='/UserHome'>
                        <IoHelpCircle className="icon-2" />
                    </Link>
                    <Link to='/UserHome'>
                        <IoIosSearch className="icon-2" />
                    </Link>
                    <Link to='/UserHome'>
                        <IoMdNotifications className="icon-2" />
                    </Link>
                    <Link to='/'>
                        <ImSwitch className="icon-2" />
                    </Link>

                    <div className='admin-dp'>
                        <img src={dp} alt="" className="admin-dp-img" />
                    </div>
                </span>
            </ul>
        </div>
    );
};

export default UserNavbar;