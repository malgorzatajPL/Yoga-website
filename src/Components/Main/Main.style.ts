import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: -1;
  @media (max-width: 900px) {
    height: 100vh;
    flex-direction: column-reverse;
    align-items: center;
  }
  `;
export const MainImageBox = styled.div`
  position: relative;
  width: 42%;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 900px) {
    width: auto;
  }
  :before {
    content: '';
    position: absolute;
    background-image: url(/Shape.png);
    width: 700px;
    height: 700px;
    background-repeat: no-repeat;
    z-index: -1;
    right: -178px;
    bottom: -47%;
  }
  `;
export const MainImage = styled.img`
  border-radius: 50%;
  `;
  
export const MainBanner = styled.div`
  display: flex;
  width: 44%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 900px) {
    width: 100%;
  }
  `;

export const MainBannerSubtitle = styled.div`
  width: 80%;
  padding-bottom: 30px;
`;
