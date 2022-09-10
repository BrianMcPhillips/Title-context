import React, { useState } from 'react';
import { TitleContext } from '../../context/TitleContext';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function App() {
  const [title, setTitle] = useState('hi there');
  
  return (
    <>
      <TitleContext.Provider value={{ title, setTitle }}>
        <Controls />
        <Display />
      </TitleContext.Provider>
    </>
  );
}
