import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <Navbar
      fixed='top'
      expand='lg'
      className='bg-success text-white'
      aria-label='Main navigation'
    >
      <Container fluid>
        <Navbar.Toggle
          aria-controls='navbarScroll'
          aria-label='Toggle navigation menu'
          className='order-first text-white'
        />
        <Navbar.Brand className='text-white' href='/'>
          LocalBytes
        </Navbar.Brand>
        <Navbar.Collapse id='navbarScroll'>
          <Form className='d-flex ms-auto mt-2' onSubmit={handleSearchSubmit}>
            <Form.Control
              type='search'
              placeholder='Search for a restaurant'
              className='me-2'
              aria-label='Search for a restaurant'
              value={search}
              onChange={handleSearchChange}
            />
            <Button variant='outline-light' aria-label='Submit search'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
