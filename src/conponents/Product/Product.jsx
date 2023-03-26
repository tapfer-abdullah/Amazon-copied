import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const element = <FontAwesomeIcon icon={faShoppingCart} />


const Product = (props) => {
    const {ratings, price, name, seller, img} = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="Product Image" />
            <div>
                <h3 className='product-name'>{name}</h3>
                <p className="product-price">Price: ${price}</p>
                <p className="product-Manufacturer">Manufacturer: {seller}</p>
                <p className="product-Rating">Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className="cart-btn">Add to Cart {element}</button>
        </div>
    );
};

export default Product;