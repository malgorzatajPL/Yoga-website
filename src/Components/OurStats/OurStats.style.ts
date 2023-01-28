import styled from 'styled-components';

export const OurStatsStyle = styled.section`
  min-height: 80vh;
  background-image: url('/BackgroundOurStats.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    background-image: url(/Design.png);
    width: 700px;
    height: 700px;
    background-repeat: no-repeat;
    z-index: -1;
    left: -48px;
    top: -6%;
  }
`;

export const CardsCircle = styled.div`
  display: flex;
  padding: 200px 50px 50px 50px;
`;
