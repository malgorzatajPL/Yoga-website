import React from 'react';
import { ItemStyle, NavItemStyle } from './NavigationItem.style';

interface ItemProps {
  itemName: string;
}

const NavigationItem = (props: ItemProps) => {
  const { itemName } = props;
  return (
    <NavItemStyle>
      <ItemStyle>{itemName}</ItemStyle>
    </NavItemStyle>
  );
};

export default NavigationItem;
