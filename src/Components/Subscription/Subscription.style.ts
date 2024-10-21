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
  margin-top: 20px;
  ::placeholder {
    color: ${theme.palette.primary[500]};
    font-family: ${theme.fontFamily.main};
    font-size: ${fontSize(22)};
    opacity: 0.502;
    padding-left: 30px;
  }
  @media (max-width: 1000px) {
    width:300px;
    font-size: ${fontSize(20)};
  }
  `;
export const SubscribeButton = styled.button`
  position: absolute;
  margin-top: 20px;
  width: 222px;
  z-index: 5;
  right: 0;
  height: 65px;
  border-radius: 33px;
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(25)};
  background-color: ${theme.palette.primary[200]};
  color: ${theme.palette.primary[600]};
  
  border: none;
  @media (max-width: 1000px) {
    width:120px;
    font-size: ${fontSize(20)};
    right: 120px;
  }
  `;
