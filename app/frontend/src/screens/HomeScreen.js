import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import products from '../Products'

function HomeScreen() {
  return (
    <Container fluid="md" className="p-4">
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
    </Container>
  )
}

export default HomeScreen
