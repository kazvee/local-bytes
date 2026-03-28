import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Privacy() {
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={8} className='mx-auto'>
                    <Card className='h-100 border-double'>
                        <Card.Body>
                            <Card.Title className='mb-3'>Privacy Policy</Card.Title>
                            <Card.Subtitle className='mb-3'>
                                LocalBytes Analytics
                            </Card.Subtitle>
                            <Card.Text className='mb-3'>
                                We use anonymous, cookie-free analytics to improve the site.
                            </Card.Text>
                            <Card.Text className='mb-3'>
                                <strong>Umami</strong> tracks visits without personal data.
                            </Card.Text>
                            <Card.Text className='mb-3'>
                                <strong>Cloudflare</strong> aggregates traffic and performance data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}