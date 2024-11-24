import { Link } from 'react-router-dom';
import { FiGrid } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { MdAddModerator } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";

import "../style/navbar.css";
import dp from "../images/dp-admin-2.webp";
import logo from "../images/logo.png";

const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="list">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='user-logo'>
                        <img src={logo} alt="" className="user-logo-img" />
                    </div>
                    <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
                        <h5 style={{ margin: 0, padding: 0, color: 'white' }}>BUS TRACKER</h5>
                    </Link>
                </span>
            </ul>
            <ul className="list">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/Dashboard'>
                        <FiGrid className="icon-2" />
                    </Link>
                    <Link to='/Dashboard'>
                        <MdAddModerator className="icon-2" />
                    </Link>
                    <Link to='/Dashboard'>
                        <BiSolidBookAdd className="icon-2" />
                    </Link>
                    <Link to='/Dashboard'>
                        <IoIosSearch className="icon-2" />
                    </Link>
                    <Link to='/Dashboard'>
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

export default Navbar;