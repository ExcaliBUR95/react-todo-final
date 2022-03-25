
import React from 'react';

const Product = ({ item }) => {
    
    return (
        <div className='product_cart'>
            <div>
                <img src={item.img} alt={'shoes'} />
            </div>
            <div>
                <h1 className='name'>{item.name}</h1>
                <button className='details'>Детали</button>
                <h2 className='price'>{item.price}</h2>
                <hr />
                <p className='description'>lorem ipsum dik machsh haz machsh, t1ehar mah bu, say k1natana ecna as i</p>
                <button className='addToCart'>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Product;