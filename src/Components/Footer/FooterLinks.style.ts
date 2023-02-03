import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const FooterLinks = styled.div``;
export const FooterImageStyle = styled.img`
  padding: 8px 15px 0 0;
`;
export const TitleFooter = styled.h4`
  color: ${theme.palette.primary[600]};
  font-family: ${theme.fontFamily.main};
  font-weight: 700;
  font-size: ${fontSize(33)};
  line-height: 2;
`;

export const ListFooter = styled.ul``;

export const ItemFooter = styled.li`
  color: ${theme.palette.primary[600]};
  font-family: ${theme.fontFamily.main};
  font-weight: 400;
  font-size: ${fontSize(25)};
  line-height: 1.5;
`;
