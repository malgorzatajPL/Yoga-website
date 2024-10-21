import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const NavItemStyle = styled.div<{ isMobileMenuOpen: boolean }>`
  padding: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "25px" : "0 25px")};
`;
export const ItemStyle = styled.span`
  color: ${theme.palette.grey};
  font-family: ${theme.fontFamily.main};
  text-transform: uppercase;
  z-index: 2;
  position: relative;
  font-weight: 700;
  :hover {
    color: ${theme.palette.primary[600]};
  }
  :after {
    transition: all 0.5s;
    display: block;
    position: absolute;
    top: 4px;
    left: -7%;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 50px;
    content: '.';
    color: transparent;
    background: ${theme.palette.primary[300]};
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  :hover:after {
    opacity: 1;
    visibility: visible;
    height: 50px;
    width: 120%;
  }
`;
