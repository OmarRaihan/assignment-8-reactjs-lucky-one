
import { faDeleteLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    const removeItem = cart =>{
        console.log('remove', cart);
        return cart = []
    };


    const randomData = (cart) =>{
        let setRandom = Math.floor((Math.random() * cart.length))
        return alert(setRandom);
    };

    return (
        <div className='cart'>
            <h2 className='text-center my-3'>Cart</h2>
            <div >
                {
                    cart.map(item => {
                        
                        return (
                            <div className='cart-info col-12 my-2'>
                                <img src={item.img} alt="" />
                                <div>
                                <h5>{item.name}</h5>
                                <p><span>Brand:</span> {item.brand}</p>
                                </div>
                                <FontAwesomeIcon className='ms-auto me-3 trash' icon={faTrashCan}></FontAwesomeIcon>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center ms-auto'>
            <button className='button text-center' onClick={() => randomData(cart)}>Select One</button>
            <button className='button C' onClick={() => removeItem(cart)}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;