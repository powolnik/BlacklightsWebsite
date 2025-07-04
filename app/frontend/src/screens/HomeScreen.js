import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../Products'

function HomeScreen() {
  return (
    <div>
        <h1>TEST</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <div>
                        <img src={product.image} alt={product.name} />
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
