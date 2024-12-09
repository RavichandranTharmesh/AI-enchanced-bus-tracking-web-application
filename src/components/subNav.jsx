import React, { useEffect, useState } from "react";
import bus1 from "../images/bus-1.webp";
import bus2 from "../images/bus-2.png";
import bus3 from "../images/bus-3.png";
import "../style/navbar.css";
import { BsCircleFill } from "react-icons/bs";

const SubNav = ({ pressedCard, totalBus, movingBus }) => {

    const [active1, setActive1] = useState('none');
    const [active2, setActive2] = useState('block');
    const [active3, setActive3] = useState('none');
    const [active4, setActive4] = useState('none');

    useEffect(() => {

        pressedCard('MOVING BUSES')

    }, [pressedCard]);


    const cardPress = (data) => {
        pressedCard(data);

        if (data === 'TOTAL BUSES') {
            setActive1('block');
            setActive2('none');
            setActive3('none');
            setActive4('none');
        }
        if (data === 'MOVING BUSES') {
            setActive1('none');
            setActive2('block');
            setActive3('none');
            setActive4('none');
        }
        if (data === 'STOP BUSES') {
            setActive1('none');
            setActive2('none');
            setActive3('block');
            setActive4('none');
        }
        if (data === 'NON ACTIVE BUSES') {
            setActive1('none');
            setActive2('none');
            setActive3('none');
            setActive4('block');
        }
    };


    return (
        <div className="subnav">

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(97, 200, 252)' }}>
                    <img src={bus1} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ display: active1, marginRight: 5 }}>
                                <BsCircleFill size={12} color="green" />
                            </span>
                            TOTAL BUSES
                        </p>
                        <p className='subnav-content-txt-2'>{totalBus}</p>
                    </div>
                </div>
            </div>

            <div className="navCard" onClick={() => cardPress('MOVING BUSES')}>
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(78, 248, 78)' }}>
                    <img src={bus3} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ display: active2, marginRight: 5 }}>
                                <BsCircleFill size={12} color="green" />
                            </span>
                            MOVING BUSES
                        </p>
                        <p className='subnav-content-txt-2'>{movingBus}</p>
                    </div>
                </div>
            </div>

            <div className="navCard" onClick={() => cardPress('STOP BUSES')}>
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(246, 62, 62)' }}>
                    <img src={bus2} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ display: active3, marginRight: 5 }}>
                                <BsCircleFill size={12} color="green" />
                            </span>
                            STOP BUSES
                        </p>
                        <p className='subnav-content-txt-2'>0</p>
                    </div>
                </div>
            </div>

            <div className="navCard">
                <div className='subnav-content-1' style={{ backgroundColor: 'rgb(246, 198, 42)' }}>
                    <img src={bus3} alt="" className="img" />
                </div>
                <div className='subnav-content-2'>
                    <div>
                        <p className='subnav-content-txt' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ display: active4, marginRight: 5 }}>
                                <BsCircleFill size={12} color="green" />
                            </span>
                            NON ACTIVE BUSES
                        </p>
                        <p className='subnav-content-txt-2'>0</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubNav;