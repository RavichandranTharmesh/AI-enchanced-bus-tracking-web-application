import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import vehiIcon from '../images/bus.png';

const containerStyle = {
    width: "100%",
    height: "500px",
};

const defaultCenter = {
    lat: 6.93188566689971,
    lng: 79.87817314564941
};

const DirLive = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [directions, setDirections] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);

    // Watch the user's current location
    useEffect(() => {

        const getCurrentLocation = () => {

            if (navigator.geolocation) {
                const watchId = navigator.geolocation.watchPosition(
                    (position) => {
                        setCurrentPosition({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    (error) => console.error("Error getting location:", error),
                    {
                        enableHighAccuracy: true,
                        maximumAge: 0,
                    }
                );

                return () => navigator.geolocation.clearWatch(watchId); // Clean up watcher on unmount
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        }
        getCurrentLocation();
    }, []);

    // Calculate the route between "From" and "To" locations
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
                center={currentPosition || defaultCenter}
                zoom={13}
            >

                {directions && <DirectionsRenderer directions={directions} />}
                {currentPosition && (
                    // <Marker
                    //     position={currentPosition}
                    //     icon={{
                    //         url: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your icon
                    //         scaledSize: new window.google.maps.Size(40, 40), // Adjust size
                    //     }}
                    // />
                    <Marker position={currentPosition} icon={customIcon} />
                )}

            </GoogleMap>
        </div>
    );
};

export default DirLive;
