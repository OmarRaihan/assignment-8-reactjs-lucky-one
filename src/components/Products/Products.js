
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='headline text-center w-50 mx-auto my-5 $pink-200'>
            <h1>Laptop City</h1>
            <p>Welcome to Laptop City. Grab the best laptop for you.</p>
            </div>

            {/* product section */}
            <div className="shop-container">
                <div className="products-container">
                    {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product> )
                    }
                </div>
                <div className='cart-container card shadow-lg border-0'>
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Products;