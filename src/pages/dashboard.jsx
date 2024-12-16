import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SubNav from '../components/subNav';
import DashLeftContent from './dashLeftContent';
import axios from 'axios';
import "../style/dashboard.css";
import load from "../images/load.webp";

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contentHeading: '',
            fetchArray: [],
            totalBus: 0,
            loading: true,
            reserveArray: [],
            movingBus: 0
        }

    }

    handlepressedCard = (data) => {
        this.setState({
            contentHeading: data
        });
    }

    componentDidMount() {

        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/getbus');
                const resdata = await res.data;

                this.setState({
                    fetchArray: resdata,
                    totalBus: resdata.length,
                    loading: false
                });

            } catch (error) {
                console.log('Main Error', error);
            }
        };

        const fetchData2 = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/getreserve');
                const resdata = await res.data;

                this.setState({
                    reserveArray: resdata,
                    loading: false
                });

            } catch (error) {
                console.log('Main Error', error);
            }
        };

        const fetchData3 = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/getlocation');
                const resdata = await res.data;

                this.setState({
                    movingBus: resdata.length,
                    loading: false
                });

            } catch (error) {
                console.log('Main Error', error);
            }
        }

        fetchData();
        fetchData2();
        fetchData3();
    }

    render() {

        return (
            <div>
                <Navbar />
                <SubNav pressedCard={this.handlepressedCard} totalBus={this.state.totalBus} movingBus={this.state.movingBus} />

                {!this.state.loading && (
                    <div className="home">
                        <div className="card-1">
                            <DashLeftContent contentHeading={this.state.contentHeading} busArray={this.state.reserveArray} />
                        </div>

                        <div className="card-2">
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div>

                                    <h4 style={{ margin: 0, padding: 0 }}>CHOOSE THE BUS TO TRACKING</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
                                        <div style={{ height: '100px', width: '100px' }}>
                                            <img src={load} alt="" className="loading-pic" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {this.state.loading && (
                    <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Loading...</div>
                )}

            </div>
        )
    }

};

export default Dashboard;
