import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import products from '../Products'

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
          <h1 style={{ textAlign: 'center' }}>Our Products</h1>
          <Row className="justify-content-center">
            {products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <div style={{ textAlign: 'center' }}>
                  <img src={product.image} alt={product.name} style={{ width: '64px', height: '64px' }} />
                  <h3>{product.name}</h3>
                  <p>Product ID: {product._id}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default HomeScreen
