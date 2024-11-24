import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '520px'
};

const center = {
  lat: 6.93188566689971,
  lng: 79.87817314564941
};

const markers = [
  { id: 1, position: { lat: 6.837809366680228, lng: 79.87169411691436 } },
  { id: 2, position: { lat: 6.852126143395578, lng: 79.93005898278986 } },
];

// const mapOptions = {
//   styles: [
//     { featureType: 'road', stylers: [{ visibility: 'off' }] },
//     { featureType: 'water', stylers: [{ color: '#00bfff' }] },
//   ],
// };


const Gmap = () => {

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBreBswpZvbUua73_EwiWc0pxFJSRGlhkQ',
  });


  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;


  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      // options={mapOptions}
      >
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </div>
  );


};

export default Gmap;
