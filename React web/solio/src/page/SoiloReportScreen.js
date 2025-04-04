import React, { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { jsPDF } from "jspdf";

function SoilReportScreen() {
  const [location, setLocation] = useState({ lat: 6.9271, lng: 79.8612 }); // Default to Colombo
  const reportDate = new Date().toLocaleString();

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Soil Report", 20, 20);
    doc.text(`Date: ${reportDate}`, 20, 30);
    doc.text("Soil Type: Red Soil", 20, 40);
    doc.text("pH Level: Good", 20, 50);
    doc.text("Organic Matter: Moderate", 20, 60);
    doc.text("Moisture: Bad", 20, 70);
    doc.save("Soil_Report.pdf");
  };

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-lg">
        <h2 className="text-center mb-3">🧪 Soil Report</h2>
        <h4>🌱 Red Soil</h4>
        <p>
          Red soil is rich in iron and suitable for crops like groundnuts and
          potatoes.
        </p>
        
        <iframe
          title="Location Map"
          width="100%"
          height="250"
          style={{ borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_API_KEY&q=${location.lat},${location.lng}`}
        ></iframe>
        <p className="mt-2">📍 Location: {reportDate}</p>
        
        <Row className="mt-3">
          <Col md={4}>
            <Card className="p-3 text-center shadow-sm">
              <h5>⚗️ pH Level</h5>
              <p style={{ color: "green" }}>🟢 Good</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center shadow-sm">
              <h5>🌿 Organic Matter</h5>
              <p style={{ color: "orange" }}>🟠 Moderate</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center shadow-sm">
              <h5>💧 Moisture</h5>
              <p style={{ color: "red" }}>🔴 Bad</p>
            </Card>
          </Col>
        </Row>
        
        <div className="text-center mt-4">
          <Button variant="primary" className="mx-2" onClick={generatePDF}>
            📄 Download Report
          </Button>
          <Button variant="secondary" className="mx-2">
            🔄 Refresh
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default SoilReportScreen;
