import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const NewExperienceStyle = styled.section`
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  :before {
    content: "";
    position: absolute;
    background-image: url(/background.png);
    width: 877px;
    height: 842px;
    background-repeat: no-repeat;
    z-index: 1;
    right: -506px;
    opacity: 0.5;
    top: 4%;
  }
  @media (max-width: 900px) {
    z-index: -1;
  }
`;
export const ImageExperience = styled.img`
  transform: scale(0.8);
  z-index: 1;
  @media (max-width: 1000px) {
    transform: scale(1);
    padding-top: 30px;
  }
`;
