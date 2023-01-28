import React from 'react';
import {
  BoxImage,
  CardStyle,
  SubtitleCard,
  TitleCard,
  Image,
} from './Card.style';

export type CardProps = {
  imageSrc: string;
  titleCard: string;
  subtitleCard: string;
};

const Card = ({ imageSrc, titleCard, subtitleCard }: CardProps) => {
  return (
    <CardStyle>
      <BoxImage>
        <Image src={imageSrc} alt='Card image' />
      </BoxImage>
      <TitleCard>{titleCard}</TitleCard>
      <SubtitleCard>{subtitleCard}</SubtitleCard>
    </CardStyle>
  );
};

export default Card;
