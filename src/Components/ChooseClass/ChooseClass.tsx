import React from 'react';
import { Cards, ChooseClassSection } from './ChooseClass.style';
import Card from './Card';
import { Header1, Subtitle } from '../../shared/TextComponents';
import { Header } from '../../shared/HeadersBox';

const ChooseClass = () => {
  return (
    <ChooseClassSection>
      <Header>
        <Header1>Choose class</Header1>
        <Subtitle margin={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </Subtitle>
      </Header>
      <Cards>
        <Card
          imageSrc='/Card1.png'
          titleCard='NEWBIE CLASS'
          subtitleCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Card
          imageSrc='/Card2.png'
          titleCard='ADVANCED CLASS'
          subtitleCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Card
          imageSrc='/Card3.png'
          titleCard='EXPERT CLASS'
          subtitleCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </Cards>
    </ChooseClassSection>
  );
};

export default ChooseClass;
