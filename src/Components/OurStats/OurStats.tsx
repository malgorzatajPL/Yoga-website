import React from 'react';
import { CardsCircle, OurStatsStyle } from './OurStats.style';
import { Header1, Subtitle } from '../../shared/TextComponents';
import { Header } from '../../shared/HeadersBox';
import { CardCircle } from './CardCircle';

const OurStats = () => {
  return (
    <OurStatsStyle>
      <Header>
        <Header1 primary={true}>Our stats</Header1>
        <Subtitle primary={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </Subtitle>
      </Header>
      <CardsCircle>
        <CardCircle titleCard='123' subtitleCard='Lorem ipsum dolor sit amet' />
        <CardCircle titleCard='123' subtitleCard='Lorem ipsum dolor sit amet' />
        <CardCircle titleCard='123' subtitleCard='Lorem ipsum dolor sit amet' />
      </CardsCircle>
    </OurStatsStyle>
  );
};

export default OurStats;
