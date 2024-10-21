import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const CardCircleStyle = styled.div`
  width: 330px;
  height: 330px;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  display: flex;
  border: 5px solid ${theme.palette.primary[600]};
  @media (max-width: 900px) {
    margin: 20px 0;
  }
`;
export const TitleCircleStyle = styled.div`
  font-family: ${theme.fontFamily.main};
  font-weight: 900;
  font-size: ${fontSize(67)};
  line-height: 1.8;
  color: ${theme.palette.primary[600]};
`;
export const SubtitleCircleStyle = styled.div`
  font-family: ${theme.fontFamily.main};
  font-weight: 400;
  font-size: ${fontSize(27)};
  line-height: 1.8;
  width: 80%;
  margin: 0 auto;
  color: ${theme.palette.primary[600]};
`;
