import React, { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaDownload, FaInfoCircle } from "react-icons/fa";

function HistoryScreen() {
  const [history, setHistory] = useState([
    {
      id: 1,
      soilType: "Red Soil",
      status: "Active",
      date: "11/01/25 23:10:11",
      location: { lat: 6.9271, lng: 79.8612 },
    },
    {
      id: 2,
      soilType: "Clay Soil",
      status: "Active",
      date: "10/25/25 14:20:15",
      location: { lat: 7.2906, lng: 80.6337 },
    },
  ]);

  const downloadReport = (report) => {
    alert(`Downloading ${report.soilType} report...`);
    // Implement PDF download logic here
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">📜 Soil Report History</h2>

      {history.length === 0 ? (
        <p className="text-center">No reports available.</p>
      ) : (
        history.map((report) => (
          <Card key={report.id} className="mb-3 p-3 shadow-sm">
            <Row>
              <Col xs={3} className="d-flex align-items-center">
                <FaInfoCircle size={40} />
              </Col>
              <Col xs={6}>
                <h5>{report.soilType}</h5>
                <p>
                  <FaMapMarkerAlt className="text-danger" /> Location:{" "}
                  <a
                    href={`https://www.google.com/maps?q=${report.location.lat},${report.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </p>
                <p>📅 {report.date}</p>
              </Col>
              <Col xs={3} className="text-center">
                <Button variant="success" onClick={() => downloadReport(report)}>
                  <FaDownload /> Download
                </Button>
              </Col>
            </Row>
          </Card>
        ))
      )}
    </Container>
  );
}

export default HistoryScreen;
