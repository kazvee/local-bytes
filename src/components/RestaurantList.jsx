import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restaurants from '../data/restaurants.json';

function RestaurantList() {
  return (
    <Container className='mt-4'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {restaurants.map((restaurant, index) => (
          <Col key={index}>
            <Card className='h-100 border-double'>
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Subtitle className='mb-2'>
                  {restaurant.cuisine}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Postcode:</strong> {restaurant.postcode}
                </Card.Text>
                <Card.Text>
                  <strong>Recommended:</strong>
                </Card.Text>
                <ul className='restaurant-list'>
                  {restaurant.recommended.map((dish, index) => (
                    <li key={index}>{dish}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RestaurantList;
