import React from 'react';
import Product from './Product';
import state from './state';


const MainContainer = ({filterState}) => {

    return (
        <div className='product_class'>
            {filterState.map((item) => {
                return <Product
                    item={item}
                    key={item.id}
                />
            })}


           
        </div>
    );
};

export default MainContainer;