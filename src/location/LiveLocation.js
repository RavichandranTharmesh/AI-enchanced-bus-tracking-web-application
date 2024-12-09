import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import vehiIcon from '../images/bus-stop (1).png';

const containerStyle = {
    width: '100%',
    height: '520px'
};

const center = {
    lat: 0,
    lng: 0,
};


const LiveLocation = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => console.error("Error getting location: ", error),
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }, []);


    

    if (loadError) return <div>Error loading Google Maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    const customIcon = {
        url: vehiIcon, // Use the imported local icon
        scaledSize: new window.google.maps.Size(50, 50), // Adjust the size as needed
    };


    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
            >
                <Marker position={currentPosition} icon={customIcon} />
                {/* <Marker position={currentPosition}/> */}
            </GoogleMap>
        </div>
    );

};

export default LiveLocation;
