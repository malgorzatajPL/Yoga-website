import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const PricingOfferStyle = styled.section`
  background: ${theme.palette.primary[600]};
  min-height: 80vh;
  padding-bottom: 100px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
