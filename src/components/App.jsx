
import React, { useState } from 'react';
import MainContainer from './MainContainer';
import Search from './Search';
import state from './state';


const App = () => {
  const [value, setValue] = useState('')

    const filterState = state.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
  return (
    <div>
      <div>
     <Search  setValue={setValue}/>
      </div>
     <div>
     <MainContainer filterState={filterState}/>
     </div>
    </div>
  );
};

export default App;