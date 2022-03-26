
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, brand, price, img} = props.product;
    return (
        <div>
            <div className='product card shadow-lg border-0'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p><span>Brand: </span>{brand}</p>
                <p><span>Price: </span>{price}</p>
            </div>
            <button className='btn-cart'>
                <p className='align-items-center'>Add to Cart</p>
            </button>
            </div>
        </div>
    );
};

export default Product;