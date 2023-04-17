
import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, removeShoppingCart, children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        if(product.quantity === 0){
            product.quantity =1;
        }

        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + (product.shipping * product.quantity);
    }
    //let tax is 7%
    const totalTax = (total*7)/100;
    const grandTotal = total + shipping + totalTax;
        return (
        <div className='cart'>
            <h3 className='title'>Order summery</h3>
            <div className="cart-details">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: {cart.length ? "$"+total : 0}</p>
                <p>Total Shipping Charge: {cart.length ? "$"+ shipping : 0}</p>
                <p>Tax: {totalTax>0 ? "$" + totalTax.toFixed(2):0 }</p>
                <h6 className='total-price'>Grand Total: {grandTotal>0 ? "$" + grandTotal.toFixed(2):0 }</h6>
                <button onClick={removeShoppingCart} className='clear-cart'><span>Clear Cart</span><FontAwesomeIcon icon={faTrashCan} /></button>
                {children}
            </div>
        </div>
    );
};

export default Cart;