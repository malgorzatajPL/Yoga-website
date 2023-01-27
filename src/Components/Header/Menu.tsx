import { Logo, LogoBox, MenuBox, MenuStyle } from './Menu.style';
import NavigationItem from './NavigationItem';

const Menu = () => {
  const MenuItems = ['Home', 'About us', 'Services', 'Contact us'];

  return (
    <MenuStyle>
      <LogoBox>
        <Logo src='/Logo.png' alt='Logo' />
      </LogoBox>
      <MenuBox>
        {MenuItems.map((item) => (
          <NavigationItem key={item} itemName={item} />
        ))}
      </MenuBox>
    </MenuStyle>
  );
};

export default Menu;
