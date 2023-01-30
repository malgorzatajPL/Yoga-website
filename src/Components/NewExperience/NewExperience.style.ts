import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const NewExperienceStyle = styled.section`
  display: flex;
  position: relative;
  overflow: hidden;
  :before {
    content: '';
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
`;
export const ImageExperience = styled.img`
  transform: scale(0.8);
`;
