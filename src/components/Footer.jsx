import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar
      fixed='bottom'
      className='bg-success text-light py-1'
      aria-label='Footer'
    >
      <Container className='d-flex justify-content-center'>
        <Row className='w-100'>
          <Col className='text-center'>
            <Nav className='flex-column'>
              <Nav.Link
                href='https://github.com/kazvee/localbytes/#readme'
                className='text-light'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit the LocalBytes GitHub repo'
              >
                <Image src='/github.png' width={24} height={24} /> GitHub
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
