import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) =>{
        let newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart)
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summery</h3>
                <p>Total Cart: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;