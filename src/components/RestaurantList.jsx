import { useMemo } from 'react';
import Fuse from 'fuse.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restaurants from '../data/restaurants.json';

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function RestaurantList({ searchQuery }) {
  const normalizedRestaurants = useMemo(() => {
    return restaurants.map(r => ({
      ...r,
      n_name: normalizeText(r.name ?? ''),
      n_cuisine: normalizeText(r.cuisine ?? ''),
      n_postcode: normalizeText(r.postcode ?? ''),
      n_recommended: normalizeText((r.recommended ?? []).join(' '))
    }));
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(normalizedRestaurants, {
      keys: ['n_name', 'n_cuisine', 'n_postcode', 'n_recommended'],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true,
      shouldSort: true,
      minMatchCharLength: 2,
      location: 0,
      distance: 100,
      ignoreLocation: true,
      findAllMatches: false
    });
  }, [normalizedRestaurants]);

  const filteredRestaurants = searchQuery
    ? fuse.search(normalizeText(searchQuery)).map((result) => result.item)
    : normalizedRestaurants;

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

                  {restaurant.mapUrl && (
                    <Card.Text>
                      📍
                      <a href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer">
                        Map
                      </a>
                    </Card.Text>
                  )}

                  {restaurant.websiteUrl && (
                    <Card.Text>
                      🌐
                      <a href={restaurant.websiteUrl} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </Card.Text>
                  )}

                  {restaurant.recommended && restaurant.recommended.length > 0 && (
                    <>
                      <Card.Text>
                        <strong>Recommended:</strong>
                      </Card.Text>
                      <ul className='restaurant-list'>
                        {restaurant.recommended.map((dish, index) => (
                          <li key={index}>{dish}</li>
                        ))}
                      </ul>
                    </>
                  )}
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
