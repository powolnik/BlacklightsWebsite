import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../Products'

function HomeScreen() {
  return (
    <div>
        // centralise page content AI!
        <h1 style={{ textAlign: 'center' }}>Our Products</h1>
        <Row>
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
  )
}

export default HomeScreen
