import React, { useContext } from 'react';
import { TitleContext } from '../../context/TitleContext';

const Display = () => {
  const { text } = useContext(TitleContext);

  return (
    <h1>{text}</h1>
  );
};

export default Display;
