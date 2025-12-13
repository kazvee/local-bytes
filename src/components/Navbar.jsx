import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar({ onSearch }) {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <Navbar
      fixed='top'
      expand='lg'
      className='bg-success text-white p-2'
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}>
      <Container fluid className='d-flex flex-column flex-sm-row'>
        <div className='d-flex w-100 justify-content-between align-items-center'>
          <Navbar.Brand className='text-white mx-auto mx-sm-0' href={`${import.meta.env.BASE_URL}`}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt='LocalBytes logo'
              width='50'
              height='auto'
              className='me-2'
            />
            LocalBytes
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbarScroll' />
        </div>

        <Form
          className='d-flex mt-2 w-100 w-sm-auto'
          onSubmit={handleSearchSubmit}>
          <Form.Control
            type='search'
            id='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            value={search}
            onChange={handleSearchChange}
          />
          <Button type='submit' variant='outline-light'>
            <span className='d-none d-sm-inline'>Search</span>

            <img
              src={`${import.meta.env.BASE_URL}search.png`}
              alt='Search'
              className='d-inline d-sm-none'
              style={{ width: '1.2rem', height: '1.2rem' }}
            />
          </Button>
        </Form>

        {/* <Navbar.Collapse id='navbarScroll' className='mt-2'>
          <Nav className='ms-auto flex-column flex-lg-row'>
            <Nav.Link
              href='https://github.com/kazvee/localbytes/#readme.com'
              target='_blank'
              rel='noopener noreferrer nofollow'
              className='text-white'
              onClick={() => setExpanded(false)}>
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
