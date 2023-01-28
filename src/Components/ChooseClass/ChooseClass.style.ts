import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const ChooseClassSection = styled.section`
  background-color: ${theme.palette.primary[600]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderChooseClass = styled.div`
  padding: 60px;
  text-align: center;
`;
export const SubtitleChooseClass = styled.p`
  font-family: ${theme.fontFamily.main};
  color: ${theme.palette.primary[100]};
  font-variant-caps: normal;
  line-height: 1.8;
  z-index: 5;
  font-size: ${fontSize(30)};
  width: 70%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
`;
