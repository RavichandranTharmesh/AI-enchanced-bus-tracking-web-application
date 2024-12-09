import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript, useJsApiLoader } from "@react-google-maps/api";
import vehiIcon from '../images/bus-stop (1).png';

const containerStyle = {
    width: '100%',
    height: '520px'
};

const center = {
    lat: 0,
    lng: 0,
};


const Tracking = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const [currentPosition, setCurrentPosition] = useState(center);
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [directions, setDirections] = useState(null);
    // const [currentPosition, setCurrentPosition] = useState(null);

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


    const handleRoute = () => {

        if (!fromLocation || !toLocation) {
            alert("Please enter both From and To locations!");
            return;
        }

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: fromLocation,
                destination: toLocation,
                travelMode: window.google.maps.TravelMode.DRIVING, // Change to WALKING, BICYCLING, or TRANSIT if needed
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    alert("Failed to fetch directions: " + status);
                }
            }
        );
    };


    if (loadError) return <div>Error loading Google Maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    const customIcon = {
        url: vehiIcon, // Use the imported local icon
        scaledSize: new window.google.maps.Size(50, 50), // Adjust the size as needed
    };


    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter From Location"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    style={{ marginRight: "10px", padding: "10px", width: "200px" }}
                />
                <input
                    type="text"
                    placeholder="Enter To Location"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    style={{ marginRight: "10px", padding: "10px", width: "200px" }}
                />
                <button onClick={handleRoute} style={{ padding: "10px" }}>
                    Show Route
                </button>
            </div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
            >
                <Marker position={currentPosition} icon={customIcon} />
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </div>
    );

};

export default Tracking;
