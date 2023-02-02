import styled from 'styled-components';
import { fontSize, theme } from '../../theme/theme';

export const CardStyle = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoxImage = styled.div`
  display: flex;
  position: relative;
  z-index: 5;
  padding: 30px 0;
  :before {
    content: '';
    position: absolute;
    background-image: url(/Shape.png);
    width: 509px;
    height: 460px;
    background-repeat: no-repeat;
    z-index: -1;
    right: -91px;
    bottom: -6%;
    background-position: center;
    background-size: contain;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
`;
export const TitleCard = styled.div<{
  primary?: boolean;
  lineHeight?: boolean;
}>`
  font-size: ${fontSize(37)};
  font-family: ${theme.fontFamily.main};
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};

  font-weight: 900;
  z-index: 5;
  line-height: ${(props) => (props.lineHeight ? '1.4' : '3')};
`;
export const SubtitleCard = styled.div`
  font-size: ${fontSize(22)};
  font-family: ${theme.fontFamily.main};
  color: ${theme.palette.primary[100]};
  max-width: 80%;
  margin: 0 auto;
  font-weight: 600;
  line-height: 1.2;
  z-index: 5;
`;
