import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let savedCart = []; //to add the added products details. our own array
    const storedCart = getShoppingCart();
    // step 1: get the id of the added products
    for (const id in storedCart) {
      // step: 2 get the product (full details) from products state by using id
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        //step: 3 added the quantity
        addedProduct.quantity = storedCart[id];

        // step: 4 add the the added cart to the saved cart array
        savedCart.push(addedProduct);
      }
    }

    //step: 5 send the info to setCart state to show order summery
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // for process 2
    // let newCart = [];
    // const isExist = cart.map(pd => pd.id === product.id);
    // if(!isExist){
    //     product.quantity = 1;
    //     newCart= [...cart, product];
    // }
    // else{
    //     isExist.quantity = isExist.quantity + 1;
    //     const remaining = cart.filter(pd => pd.id !== product.id);
    //     newCart = [...remaining, isExist];
    // }

    // process 1
    let newCart = [...cart, product];
    setCart(newCart);
    // console.log(cart)
    addToDb(product.id);
  };

  const removeShoppingCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart removeShoppingCart={removeShoppingCart} cart={cart}>
          <Link to="/Order-Review" className="order-review-btn">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
