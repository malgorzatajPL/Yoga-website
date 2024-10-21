import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const ChooseClassSection = styled.section`
  background-color: ${theme.palette.primary[600]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const SubtitleChooseClass = styled.p`
  font-family: ${theme.fontFamily.main};
  color: ${theme.palette.primary[100]};
  font-size: ${fontSize(30)};
  font-variant-caps: normal;
  line-height: 1.8;
  z-index: 5;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Cards = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
`;
