import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../Products'

function HomeScreen() {
  return (
    <div>
        <h1>TEST</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} Lg={4} xl={3} key={product._id}>
                    <h3>{product._id}</h3>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen