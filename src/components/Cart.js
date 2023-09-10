import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from './Product';

const Cart = () => {

const cartItems = useSelector(state=>state.cart)
    console.log("CartItems; ", cartItems)

    return (
        <Container>
            <h1>
                Cart will be here
            </h1>
            {cartItems?.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => {
                return <Product key={item.id}{...item} />
            })}
        </Container>
    );
};

 

export default Cart;