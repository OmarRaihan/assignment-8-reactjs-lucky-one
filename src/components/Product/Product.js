
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, brand, price, img} = product;

    return (
        <div>
            <div className='product card shadow-lg border-0'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p><span>Brand: </span>{brand}</p>
                <p><span>Price: </span>{price}/-</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
            </div>
        </div>
    );
};

export default Product;