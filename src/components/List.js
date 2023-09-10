import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import Product from './Product';

const List = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useAppDispatch();
    const cartItems = useSelector(state=>state.cart)

    useEffect(()=>{
        if(products.length<1){
            dispatch(fetchProducts());
        }
        
        
    },[dispatch,products])
   

    // to restrict updating the data every time the page is refreshed, if function is used

    // console.log("products: ",products);
    return (
        <div>
            <h1>List will be here</h1>
            {products.map((product) => (<Product key ={product.id}{...product} cartItems={cartItems}/>))}
        </div>
    );
};

export default List;