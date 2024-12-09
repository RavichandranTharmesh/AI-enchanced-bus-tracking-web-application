import React, { useState, useEffect } from "react";
import UserNavbar from '../../components/usernavbar';
import UserSubNav from '../../components/userSubNav';
import "../../style/dashboard.css";
import axios from 'axios';
import load from "../../images/load.webp";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const UserHome = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [busArray, setBusArray] = useState([]);
    const [loginArray, setLoginArray] = useState({});


    useEffect(() => {

        const fetchData = async () => {
            try {

                const res = await axios.get('http://localhost:5001/api/getreserve');
                const resdata = await res.data;

                const middleArray = [];
                resdata.map((item) => {
                    if (item.ic === id) {
                        middleArray.push(item)
                    }
                });
                setBusArray(middleArray);

            } catch (error) {
                console.log('Main Error', error);
            }
        };

        const fetchData2 = async () => {
            try {

                const res = await axios.get('http://localhost:5001/api/findByNicSignup/' + id);
                const resdata = await res.data;
                setLoginArray(resdata[0]);
                setLoading(false);

            } catch (error) {
                console.log('Main Error', error);
            }
        };

        fetchData();
        fetchData2();
    }, []);


    const track = async (item) => {
        navigate(`/UserMapScreen/${id}`, { state: item });
    };


    return (
        <div>

            {!loading && (
                <UserNavbar name={loginArray.name} id={id} image={loginArray.image.data.data} />
            )}
            {!loading && (
                <UserSubNav reserveBus={busArray.length} />
            )}

            {!loading && (
                <div className="home">

                    <div className="card-1">

                        <div style={{ marginBottom: '1rem' }}>
                            <h4 style={{ padding: 0, margin: 0, color: 'gray', textAlign: 'center' }}>RESERVED BUSES</h4>
                        </div>

                        <hr></hr>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 style={{ padding: 0, margin: 0 }}>BUS NUMBER</h5>
                            <h5 style={{ padding: 0, margin: 0 }}>ACTION</h5>
                        </div>
                        <hr></hr>

                        {busArray.map((item, index) => (
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }} key={index}>
                                <h5 style={{ padding: 0, margin: 0 }}>{item.busnumber}</h5>
                                <button className="btn-track" onClick={() => track(item)}>TRACK</button>
                            </div>
                        ))}

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

            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Loading...</div>
            )}

        </div>
    );

};

export default UserHome;
