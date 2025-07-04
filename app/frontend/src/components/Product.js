import { Card } from 'react-bootstrap'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img 
        src={product.image} 
        variant="top" 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      
      <Card.Body> 
        <Card.Title as="div" className="text-center">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="div" className="mt-3">
          <p>{product.description}</p>
        </Card.Text>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <button className="btn btn-dark">Details</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
