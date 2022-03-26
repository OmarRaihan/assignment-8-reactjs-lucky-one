
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Question/Question';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

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
                    handleAddToCart={handleAddToCart}
                    ></Product> )
                    }
                </div>
                <div className='cart-container card shadow-lg border-0'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

            {/* Question Section */}
            <div>
                <Question></Question>
            </div>
        </div>
    );
};

export default Products;