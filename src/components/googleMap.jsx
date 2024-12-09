import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '640px'
};

const center = {
  lat: 6.93188566689971,
  lng: 79.87817314564941
};


const Gmap = ({ lat }) => {

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCtSo_iA5m4GEO_OFKCUI7JrqzXuy0WnYU',
  });

  const x = 6.849795;
  const y = 79.878797;

  const [marker, setMarker] = useState({
    lat: x,
    lng: y
  })

  useEffect(() => {

    if (lat) {
      setMarker({
        lat: lat,
        lng: 79.878797
      })
    };

  }, [lat]);


  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;


  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={marker}
        zoom={10}
      // options={mapOptions}
      >
        {/* {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))} */}
        <Marker position={marker} />
      </GoogleMap>
    </div>
  );


};

export default Gmap;
