import React from 'react';
import { TitleContext } from '../../context/TitleContext';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function App() {
  return (
    <>
      <TitleContext.Provider>
        <Controls />
        <Display />
      </TitleContext.Provider>
    </>
  );
}
