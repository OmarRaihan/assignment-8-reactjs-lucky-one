
import { faDeleteLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let image = ""
    let name;
    let brand;
    for(const product of cart){
        image = product.img;
        name = product.name;
        brand = product.brand;
    }



    return (
        <div className='cart'>
            <h2 className='text-center my-3'>Cart</h2>
            <div className='cart-info'>
                <img src={image} alt="" />
                <div>
                <h5>{name}</h5>
                <p><span>Brand:</span> {brand}</p>
                </div>
                <FontAwesomeIcon className='ms-4 trash' icon={faTrashCan}></FontAwesomeIcon>
            </div>
            <button className='button mx-5'>Select One</button>
            <button className='button'>Choose Again</button>
        </div>
    );
};

export default Cart;