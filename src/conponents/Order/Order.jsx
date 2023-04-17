import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    // console.log(savedCart)

    const [cart, setCart] = useState(savedCart);

    const removeCartFromReview = (id) => {
        const remainingCart = cart.filter( pd => pd.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }
    const removeShoppingCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-items-container'>
            {
                cart.map(product => <ReviewItems
                    key={product.id}
                    product = {product}
                    removeCartFromReview = {removeCartFromReview}
                ></ReviewItems>)
            }
            </div>
            <div className="cart-container">
                <Cart removeShoppingCart={removeShoppingCart} cart={cart}>
                    <Link to= "/Order-Review" className='checkOut-btn'>
                    <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Order;