import React, { useState } from 'react';
import MainContainer from './MainContainer';
import state from './state';
const Search = () => {
    const [value, setValue] = useState('')

    const filterState = state.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase)
    })
    return (
        <div>
             <input className='inp' 
      type={'text'} 
      placeholder={'Поиск обуви'}
     onChange={(e) => setValue(e.target.value)}
      />
      <MainContainer filterState={filterState}/>
        </div>
    );
};

export default Search;