// src/components/Menu.js
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      <h2>Food Menu</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;
