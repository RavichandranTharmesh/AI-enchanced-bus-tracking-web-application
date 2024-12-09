import React, { useState } from "react";
import { GoogleMap, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import vehiIcon from '../images/bus.png';

const containerStyle = {
    width: "100%",
    height: "500px",
};

const defaultCenter = {
    lat: 6.93188566689971,
    lng: 79.87817314564941
};

const markers = [
    { id: 1, position: { lat: 6.837809366680228, lng: 79.87169411691436 } },
    { id: 2, position: { lat: 6.852126143395578, lng: 79.93005898278986 } },
];

const Direction = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
    });

    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [directions, setDirections] = useState(null);

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
                travelMode: window.google.maps.TravelMode.DRIVING, // You can also use WALKING, BICYCLING, or TRANSIT
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
                center={defaultCenter}
                zoom={13}
            >
                {directions &&
                    <DirectionsRenderer
                        directions={directions}
                    />
                }

            </GoogleMap>
        </div>
    );
};

export default Direction;