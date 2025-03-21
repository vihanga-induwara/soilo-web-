import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function HomeScreen() {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      <div className="text-center py-5 bg-light rounded">
        <h1 className="display-4">Welcome to Our Platform</h1>
        <p className="lead">Discover amazing content and explore new opportunities.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </div>

      {/* Posters Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Poster 1" />
            <Card.Body>
              <Card.Title>Exciting Events</Card.Title>
              <Card.Text>Join our upcoming events and stay updated.</Card.Text>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Poster 2" />
            <Card.Body>
              <Card.Title>Exclusive Offers</Card.Title>
              <Card.Text>Grab our latest deals and discounts.</Card.Text>
              <Button variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Poster 3" />
            <Card.Body>
              <Card.Title>Community Updates</Card.Title>
              <Card.Text>Stay connected with our community news.</Card.Text>
              <Button variant="warning">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
