import React from 'react';

const Search = (props) => {

    return (
        <div>
            <input className='inp'
                type={'text'}
                placeholder={'Поиск обуви'}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </div>
    );
};

export default Search;