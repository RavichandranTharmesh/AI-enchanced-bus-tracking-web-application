import React, { Component } from 'react';
import UserNavbar from '../../components/usernavbar';
import UserSubNav from '../../components/userSubNav';
import Gmap from '../../components/googleMap';

import "../../style/dashboard.css";
import bus1 from "../../images/bus-1.webp"


class UserMapScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {

        return (
            <div>
                <UserNavbar />
                <UserSubNav />

                <div className="home">

                    <div className="card-1">

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '80%' }}>
                                <div>
                                    <h5 style={{ padding: 0, margin: 0 }}>BUS NUMBER : EPV-00123</h5>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <h5 style={{ padding: 0, margin: 0 }}>NAME : STAR</h5>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <h5 style={{ padding: 0, margin: 0 }}>MODAL : NORMAL</h5>
                                </div>
                            </div>

                            <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={bus1} alt="" className="choosed-img" />
                            </div>
                        </div>

                        <hr></hr>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontSize: '0.9rem' }}>From :</label>
                            </div>
                            <div style={{ width: '70%' }}>
                                <input className='from-input' type="text" placeholder='start location' />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontSize: '0.9rem' }}>To :</label>
                            </div>
                            <div style={{ width: '70%' }}>
                                <input className='from-input' type="text" placeholder='end location' />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontSize: '0.9rem' }}>Date :</label>
                            </div>
                            <div style={{ width: '70%' }}>
                                <input className='from-input' type="date" placeholder='end location' />
                            </div>
                        </div>
                        <hr style={{ marginTop: '1rem' }}></hr>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <div className='btn-loc-submit'>
                                <p style={{ margin: 0, padding: 0, fontSize: '0.8rem', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>SUBMIT</p>
                            </div>
                        </div>

                    </div>

                    <div className="card-2">
                        <Gmap />
                    </div>
                </div>

            </div>
        )
    }

};

export default UserMapScreen;
