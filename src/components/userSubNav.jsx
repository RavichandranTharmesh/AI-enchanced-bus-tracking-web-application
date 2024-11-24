import bus1 from "../images/bus-1.webp";
import "../style/navbar.css";

const UserSubNav = () => {

    return (
        <div className="user-subnav">

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(97, 200, 252)' }}>
                    <img src={bus1} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt'>RESERVED BUSES</p>
                        <p className='subnav-content-txt-2'>2</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserSubNav;