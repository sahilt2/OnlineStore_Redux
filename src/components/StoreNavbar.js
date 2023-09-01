import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';

const StoreNavbar = () => {
    return (
        <div>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>Redux Online Store
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/cart'>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default StoreNavbar;