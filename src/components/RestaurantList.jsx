import { useMemo } from 'react';
import Fuse from 'fuse.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restaurants from '../data/restaurants.json';

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

function RestaurantList({ searchQuery }) {

  const processedRestaurants = useMemo(() => {
    return restaurants.map(restaurant => ({
      ...restaurant,

      searchableName: removeAccents(restaurant.name),
      searchableDishes: restaurant.recommended.map(dish => removeAccents(dish)),
    }));
  }, []);

  const normalizedQuery = removeAccents(searchQuery);

  const fuse = useMemo(() => {
    return new Fuse(processedRestaurants, {
      keys: [
        'searchableName',
        'searchableDishes',
        'cuisine',
        'postcode'
      ],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true,
      shouldSort: true,
      minMatchCharLength: 2,
      location: 0,
      distance: 100,
      ignoreLocation: true,
      findAllMatches: false,
    });
  }, [processedRestaurants]);

  const filteredRestaurants = normalizedQuery
    ? fuse.search(normalizedQuery).map(result => result.item)
    : restaurants;

  return (
    <Container className='mt-4'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
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
          ))
        ) : (
          <div className='d-flex justify-content-center w-100'>
            <Card className='border-double'>
              <Card.Body className='d-flex justify-content-center align-items-center'>
                <Card.Text>
                  <strong>No restaurants found</strong>
                  <Card.Subtitle className='mt-2'>
                    Try another search, or make a sandwich at home. 🥪
                  </Card.Subtitle>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default RestaurantList;
