import React from 'react';
import {
  MainBanner,
  MainBannerSubtitle,
  MainImage,
  MainImageBox,
  MainSection,
} from './Main.style';
import { Body, Header1 } from '../../shared/TextComponents';
import Button from '../../shared/Button';

const Main = () => {
  return (
    <MainSection>
      <MainImageBox>
        <MainImage alt='main image' src='/mainImage.png' />
      </MainImageBox>
      <MainBanner>
        <Header1 primary={true}>yoga class</Header1>
        <MainBannerSubtitle>
          <Body primary={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla neque euismod volutpat cursus. Vestibulum ac pretium orci,
          </Body>
        </MainBannerSubtitle>
        <Button buttonText='Join now' />
      </MainBanner>
    </MainSection>
  );
};

export default Main;
