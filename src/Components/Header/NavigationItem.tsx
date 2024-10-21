import React from 'react';
import { ItemStyle, NavItemStyle } from './NavigationItem.style';

interface ItemProps {
  itemName: string;
  isMobileMenuOpen: boolean
}

const NavigationItem = (props: ItemProps) => {
  const { itemName, isMobileMenuOpen } = props;
  return (
    <NavItemStyle isMobileMenuOpen={isMobileMenuOpen}>
      <ItemStyle>{itemName}</ItemStyle>
    </NavItemStyle>
  );
};

export default NavigationItem;
