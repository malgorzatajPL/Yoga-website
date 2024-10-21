import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const TrainerStyle = styled.section`
  padding: 100px 0;
  position: relative;
  background-image: url("BackgroundTrainer.png");
`;
export const BoxImageTrainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  :before {
    content: "";
    position: absolute;
    background-image: url(/TrainerShape.png);
    width: 419px;
    height: 703px;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
export const ImageTrainer = styled.img`
  padding: 50px 0;
`;
export const ContentTrainer = styled.p`
  font-weight: 400;
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(58)};
  line-height: 1.6;    
  color: ${theme.palette.primary[600]};
@media (max-width: 1000px) {
  font-size: ${fontSize(38)};
  line-height: 1.4;    
  padding: 20px 0;
}
`;
export const TitleTrainer = styled.h4`
  font-weight: 700;
  color: ${theme.palette.primary[600]};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(58)};
  line-height: 2.4;
  @media (max-width: 1000px) {
    font-size: ${fontSize(38)};
    line-height: 1.4;    
    padding: 25px 20px;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 100px;
  @media (max-width: 1000px) {
    padding: 25px;
  }
`;
