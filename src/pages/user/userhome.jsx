import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from '../../components/usernavbar';
import UserSubNav from '../../components/userSubNav';
import Gmap from '../../components/googleMap';
import "../../style/dashboard.css";

class UserHome extends Component {

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
                            <h5 style={{ padding: 0, margin: 0 }}>BUS NUMBER</h5>
                            <h5 style={{ padding: 0, margin: 0 }}>ACTION</h5>
                        </div>
                        <hr></hr>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <h5 style={{ padding: 0, margin: 0 }}>EPV-00123</h5>
                            <Link to='/UserMapScreen' className='btn-track'>
                                <p className='btn-track-txt'>TRACK</p>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <h5 style={{ padding: 0, margin: 0 }}>EPV-00123</h5>
                            <Link to='/UserMapScreen' className='btn-track'>
                                <p className='btn-track-txt'>TRACK</p>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <h5 style={{ padding: 0, margin: 0 }}>EPV-00123</h5>
                            <Link to='/UserMapScreen' className='btn-track'>
                                <p className='btn-track-txt'>TRACK</p>
                            </Link>
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

export default UserHome;
