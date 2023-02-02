import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const CardOfferStyle = styled.div`
  width: 350px;
  padding: 20px;
  text-align: center;
  height: 430px;
  background: ${theme.palette.primary[100]};
  border-radius: 8px;
  margin-bottom: 100px;
`;
export const ImageOffer = styled.img`
  padding: 20px 0;
`;
export const TextOffer = styled.p`
  font-size: ${fontSize(22)};
  color: ${theme.palette.primary[600]};
  font-weight: 400;
  font-family: ${theme.fontFamily.main};
  line-height: 1.2;
  padding-bottom: 40px;
`;
