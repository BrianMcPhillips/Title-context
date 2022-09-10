import React, { useContext } from 'react';
import { TitleContext } from '../../context/TitleContext';

const Controls = () => {
  const { title, setTitle } = useContext(TitleContext);

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <input type="text" value={title} onChange={handleChange()} />
  );
};

export default Controls;
