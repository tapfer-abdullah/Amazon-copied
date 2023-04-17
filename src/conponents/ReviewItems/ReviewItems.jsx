import React from 'react';
import "./ReviewItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product, removeCartFromReview}) => {
    // console.log(product);
    const {name, id, img, price, quantity, shipping} = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-item-details'>
                <h3 className='review-item-title'>{name}</h3>
                <p>Price: <span className='orange-text'>${price}</span></p>
                {/* <p>Shipping Charge: <span className='orange-text'>${shipping}</span></p> */}
                <p>Quantity: <span className='orange-text'>${quantity}</span></p>
            </div>
            <button onClick={() => removeCartFromReview(id)} className='review-delete-btn'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItems;