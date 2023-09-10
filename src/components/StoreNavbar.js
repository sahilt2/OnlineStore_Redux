import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const StoreNavbar = () => {
    return (
        <div>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>Redux Online Store
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to='/cart'><Nav.Link>Cart</Nav.Link></LinkContainer>
                    
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default StoreNavbar;