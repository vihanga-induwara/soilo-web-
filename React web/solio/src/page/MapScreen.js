import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

function MapScreen() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use env variable

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
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
  };

  useEffect(() => {
    fetchLocation(); // Fetch location on mount
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
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${location.lat},${location.lng}`}
        ></iframe>
      </Card>

      {/* Real-Time Location Display */}
      <Card className="mt-3 p-3 shadow-sm">
        <h5>Real-Time Location:</h5>
        <p>Latitude: {location.lat ?? "Fetching..."}</p>
        <p>Longitude: {location.lng ?? "Fetching..."}</p>
      </Card>

      {/* Buttons */}
      <Button variant="primary" className="mt-3 mx-2" onClick={fetchLocation}>
        Refresh Location
      </Button>
      <Button variant="danger" className="mt-3 mx-2">
        Exit Map
      </Button>
    </Container>
  );
}

export default MapScreen;
