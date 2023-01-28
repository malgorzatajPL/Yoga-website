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
