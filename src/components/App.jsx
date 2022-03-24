import React, { useState } from 'react';
import MainContainer from './MainContainer';
import Search from './Search';
import Product from './Product';


const App = () => {
  return (
    <div>
      <div>
     <Search />
      </div>
     <div>
       <MainContainer />
     </div>
    </div>
  );
};

export default App;