import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function MapScreen() {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Container className="text-center my-4">
      <h2 className="mb-3">Map</h2>

      {/* Google Map with User Location */}
      <Card className="p-3 shadow-sm">
        <iframe
          title="User Location Map"
          width="100%"
          height="300"
          style={{ borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          api_key="AIzaSyDcAlgSXALrsjIKcJzoE2y2aaPHlLKwbM0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDcAlgSXALrsjIKcJzoE2y2aaPHlLKwbM0&q=${location.lat},${location.lng}`}
        ></iframe>
      </Card>

      {/* Real-Time Location Display */}
      <Card className="mt-3 p-3 shadow-sm">
        <h5>Real-Time Location:</h5>
        <p>Latitude: {location.lat || "Fetching..."}</p>
        <p>Longitude: {location.lng || "Fetching..."}</p>
      </Card>

      {/* Buttons */}
      <Button variant="primary" className="mt-3 mx-2">Refresh Location</Button>
      <Button variant="danger" className="mt-3 mx-2">Exit Map</Button>
    </Container>
  );
}

export default MapScreen;
