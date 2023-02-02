import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const SubscribeStyle = styled.section`
  background-color: ${theme.palette.primary[600]};
  min-height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const SubscribeBox = styled.div`
  position: relative;
  width: 670px;
`;
export const SubscribeInput = styled.input`
  width: 659px;
  height: 63px;
  border-radius: 33px;
  background-color: ${theme.palette.white};
  border: none;
  ::placeholder {
    color: ${theme.palette.primary[500]};
    font-family: ${theme.fontFamily.main};
    font-size: ${fontSize(25)};
    opacity: 0.502;
    padding-left: 30px;
  }
`;
export const SubscribeButton = styled.button`
  position: absolute;
  width: 222px;
  z-index: 10;
  right: 0;
  height: 65px;
  border-radius: 33px;
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(25)};
  background-color: ${theme.palette.primary[200]};
  color: ${theme.palette.primary[600]};
  border: none;
`;
