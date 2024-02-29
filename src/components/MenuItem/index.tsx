import React from 'react';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

interface MenuItemComponentProps extends MenuItemProps {}

const MenuItemComponent: React.FC<MenuItemComponentProps> = (props) => {
  return <MenuItem {...props} />;
};

export default MenuItemComponent;