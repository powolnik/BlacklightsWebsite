import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import products from '../Products';

const ProjectDisplay = () => {
  const backgroundStyle = {
    backgroundImage: `url(${products[1].image})`,
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
          <h1 className="text-center">Our Projects</h1>
          <Row className="justify-content-center">
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <div className="text-center mb-4">
              <img 
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
              <h3 className="mt-3">{product.name}</h3>
            </div>
          </Col>
        ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDisplay;
