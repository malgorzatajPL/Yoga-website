import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const MenuStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 30px;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    top: 32%;
    background-color: ${theme.palette.primary[200]};
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
  z-index: 0;
  :before {
    content: '';
    position: absolute;
    background-color: ${theme.palette.primary[400]};
    width: 109px;
    height: 108px;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  height: 109px;
  align-items: center;
`;
