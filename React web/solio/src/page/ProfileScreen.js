import React from 'react';
import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import profilePic from '../assets/image.png';

function ProfileScreen({ user = {} }) { // Default empty object to avoid undefined error
  return (
    <Container className="my-5 text-center">
      {/* Profile Header */}
      <h2 className="mb-4">PROFILE</h2>
      <Image src={profilePic} roundedCircle width={120} height={120} alt="Profile" className="mb-3" />

      {/* User Information */}
      <Card className="p-3 shadow-sm">
        <Card.Body>
          <Row className="mb-2">
            <Col sm={6}><strong>Full Name</strong></Col>
            <Col sm={6}>{user?.fullName || "Not Available"}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={6}><strong>Phone Number</strong></Col>
            <Col sm={6}>{user?.phone || "Not Available"}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={6}><strong>Location</strong></Col>
            <Col sm={6}>{user?.location || "Not Available"}</Col>
          </Row>
          <Row>
            <Col sm={6}><strong>Something</strong></Col>
            <Col sm={6}>{user?.something || "Not Available"}</Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Action Buttons */}
      <Button variant="primary" className="mt-3 mx-2">Edit Profile</Button>
      <Button variant="danger" className="mt-3 mx-2">Logout</Button>
    </Container>
  );
}

export default ProfileScreen;
