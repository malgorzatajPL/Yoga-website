import styled from "styled-components";
import { fontSize, theme } from "../../theme/theme";

export const BestInstructionStyle = styled.section`
  background-color: ${theme.palette.primary[600]};
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  padding: 0 70px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1100px) {
    padding: 20px 70px;
  }
  @media (max-width: 800px) {
    padding: 30px 20px;
  }
`;
export const ImageInstruction = styled.img``;
