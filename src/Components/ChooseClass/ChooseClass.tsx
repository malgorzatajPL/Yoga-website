import React from 'react';
import {
  Cards,
  ChooseClassSection,
  HeaderChooseClass,
  SubtitleChooseClass,
} from './ChooseClass.style';
import Card from './Card';
import { Header1 } from '../../shared/TextComponents';

const ChooseClass = () => {
  return (
    <ChooseClassSection>
      <HeaderChooseClass>
        <Header1>Choose class</Header1>
        <SubtitleChooseClass>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </SubtitleChooseClass>
      </HeaderChooseClass>
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
