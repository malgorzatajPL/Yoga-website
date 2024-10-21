import styled from "styled-components";
import { theme } from "../../theme/theme";

export const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 10;
  background-color: white;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 15px;
  }
`;

export const Logo = styled.img`
  z-index: 1;
  top: 10px;
  left: 10px;
  position: absolute;
`;

export const LogoBox = styled.div`
  position: relative;
  :before {
    content: "";
    position: absolute;
    background-color: ${theme.palette.primary[400]};
    width: 109px;
    height: 108px;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;

export const MenuBox = styled.div<{ isMobileMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 109px;
  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0px;
    padding-top: 90px;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${theme.palette.primary[100]};
  }
`;

export const HamburgerIcon = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 50%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); 
  span {
    width: 100%;
    height: 3px;
    background-color: ${theme.palette.primary[600]};
  }

  @media (max-width: 768px) {
    display: flex;
    z-index: 2;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  padding-top: 90px;
  left: 0;
  height: 100vh;
  background-color: ${theme.palette.primary[100]};
  padding: 15px;
  z-index: 1;
`;
