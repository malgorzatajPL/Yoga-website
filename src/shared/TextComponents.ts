import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

export const Header1 = styled.h1<{ primary?: boolean }>`
  font-size: ${fontSize(100)};
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  text-transform: uppercase;
  font-weight: 900;
  font-family: ${theme.fontFamily.main};
  font-variant-caps: normal;
  line-height: 1.8;
  z-index: 5;
  @media (max-width: 900px) {
    font-size: ${fontSize(60)};    
  }
  
  `;
export const Header2 = styled.h1<{ primary?: boolean }>`
  font-size: ${fontSize(75)};
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${theme.fontFamily.main};
  font-variant-caps: normal;
  line-height: 1.5;
  z-index: 5;
  @media (max-width: 900px) {
    font-size: ${fontSize(40)};    
  }
`;
export const Body = styled.p<{ primary?: boolean }>`
  font-size: ${fontSize(21)};
  line-height: 1.4;
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  font-weight: 400;
  font-family: ${theme.fontFamily.main};
  font-variant-caps: normal;
`;

export const Subtitle = styled.p<{
  primary?: boolean;
  margin?: boolean;
  padding?: string;
}>`
  font-size: ${fontSize(30)};
  line-height: 1.8;
  z-index: 5;
  width: 70%;
  padding: ${(props) => (props.padding ? props.padding : '0')};
  margin: ${(props) => (props.margin ? '0 auto' : '0')};
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  font-weight: 400;
  font-family: ${theme.fontFamily.main};
  font-variant-caps: normal;
  @media (max-width: 900px) {
    width: 100%;
    font-size: ${fontSize(20)};
  }
`;
