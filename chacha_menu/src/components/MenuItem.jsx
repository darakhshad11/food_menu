// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
