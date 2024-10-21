import { useState } from 'react';
import { Logo, LogoBox, MenuBox, MenuStyle, HamburgerIcon, MobileMenu } from './Menu.style';
import NavigationItem from './NavigationItem';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const MenuItems = ['Home', 'About us', 'Services', 'Contact us'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MenuStyle>
      <LogoBox>
        <Logo src='/Logo.png' alt='Logo' />
      </LogoBox>
      <HamburgerIcon onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </HamburgerIcon>
      <MenuBox isMobileMenuOpen={isMobileMenuOpen}>
        {MenuItems.map((item) => (
          <NavigationItem isMobileMenuOpen={isMobileMenuOpen} key={item} itemName={item} />
        ))}
      </MenuBox>
      {/* {isMobileMenuOpen && (
        <MobileMenu>
          {MenuItems.map((item) => (
            <NavigationItem key={item} itemName={item} />
          ))}
        </MobileMenu>
      )} */}
    </MenuStyle>
  );
};

export default Menu;
