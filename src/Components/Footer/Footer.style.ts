import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const FooterStyle = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 80px 40px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BoxImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
`;
export const BoxFooter = styled.div`
    @media (max-width: 1000px) {
      padding: 20px 0;
    }
  :nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
    padding: 0 40px;
    @media (max-width: 1000px) {
      padding: 0;
    }
  }
  :nth-child(2) {
    grid-area: 1 / 3 / 2 / 4;
  }
  :nth-child(3) {
    grid-area: 1 / 4 / 2 / 5;
  }
  :nth-child(4) {
    display: flex;
    grid-area: 1 / 5 / 2 / 6;
  }
`;

export const FooterTitle = styled.h3`
  line-height: 2;
  font-family: ${theme.fontFamily.main};
  color: ${theme.palette.primary[500]};
  font-size: ${fontSize(33)};
  font-weight: 700;
`;
export const FooterSubtitle = styled.p`
  font-family: ${theme.fontFamily.main};
  color: ${theme.palette.primary[500]};
  font-size: ${fontSize(25)};
  font-weight: 400;
  line-height: 1.3;
`;
