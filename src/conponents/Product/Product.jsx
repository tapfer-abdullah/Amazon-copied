import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {ratings, price, name, seller, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Product Image" />
            <div>
                <h3 className='product-name'>{name}</h3>
                <p className="product-price">Price: ${price}</p>
                <p className="product-Manufacturer">Manufacturer: {seller}</p>
                <p className="product-Rating">Rating: {ratings}</p>
            </div>
            <button className="cart-btn">Add to Cart</button>
        </div>
    );
};

export default Product;