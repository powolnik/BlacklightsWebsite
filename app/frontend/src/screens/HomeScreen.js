import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import products from '../products'

function HomeScreen() {
  const backgroundStyle = {
    backgroundImage: `url(${products[0].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    position: 'relative'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '10px'
  };

  return (
    <div style={backgroundStyle}>
      <Container fluid="md" className="p-4">
        <div style={overlayStyle}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome to BlackLights</h1>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center">
                <h2 className="mb-4">About Us</h2>
                <p className="lead">
                  BlackLights is a cutting-edge technology company specializing in innovative lighting solutions and creative projects.
                </p>
                <p>
                  Our mission is to transform spaces through the perfect blend of technology and artistic expression. 
                  We create unique lighting experiences that captivate and inspire.
                </p>
                <div className="mt-5">
                  <h3>Our Core Values</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">✨ Innovation in Design</li>
                    <li className="mb-2">🎯 Technical Excellence</li>
                    <li className="mb-2">🤝 Customer Satisfaction</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HomeScreen
