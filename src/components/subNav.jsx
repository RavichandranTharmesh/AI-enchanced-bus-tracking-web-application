import bus1 from "../images/bus-1.webp";
import bus2 from "../images/bus-2.png";
import bus3 from "../images/bus-3.png";
import "../style/navbar.css";

const SubNav = () => {

    return (
        <div className="subnav">

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(97, 200, 252)' }}>
                    <img src={bus1} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt'>TOTAL BUSES</p>
                        <p className='subnav-content-txt-2'>2</p>
                    </div>
                </div>
            </div>

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(78, 248, 78)' }}>
                    <img src={bus3} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt'>MOVING BUSES</p>
                        <p className='subnav-content-txt-2'>2</p>
                    </div>
                </div>
            </div>

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(246, 62, 62)' }}>
                    <img src={bus2} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt'>PARK BUSES</p>
                        <p className='subnav-content-txt-2'>2</p>
                    </div>
                </div>
            </div>

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(246, 198, 42)' }}>
                    <img src={bus3} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt'>NOT ACTIVE BUSES</p>
                        <p className='subnav-content-txt-2'>2</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubNav;