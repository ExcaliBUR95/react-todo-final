import React from 'react';
import Product from './Product';



const MainContainer = ({ filterState }) => {

    return (
        <div className='product_class'>
            {filterState.map((item, index) => {
                return <Product
                    item={item}
                    key={index}
                />
            })}
        </div>
    );
};

export default MainContainer;