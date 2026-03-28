import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={8} className='mx-auto'>
                    <Card className='h-100 border-double'>
                        <Card.Body>
                            <Card.Title className='mb-3'>🍔 LocalBytes</Card.Title>
                            <Card.Subtitle className='mb-3'>
                                Personal Restaurant Tracker
                            </Card.Subtitle>
                            <Card.Text className='mb-3'>
                                LocalBytes is a tracker for restaurants we've tried, so we remember which dishes we've enjoyed.
                            </Card.Text>
                            <Card.Text className='mb-3'>
                                Absence from the list just means I haven't been there yet! So far, I haven't found a place I wouldn't return to. 😋
                            </Card.Text>
                            <Card.Text className='mb-3'>
                                If you'd like to learn more about me, visit my main website:{" "}
                                <a
                                    href='https://kazvee.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Visit my main site'
                                >
                                    kazvee.com
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}