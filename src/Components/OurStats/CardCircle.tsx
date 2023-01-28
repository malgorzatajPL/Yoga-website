import {
  CardCircleStyle,
  SubtitleCircleStyle,
  TitleCircleStyle,
} from './CardCircle.style';

export type CardProps = {
  titleCard: string;
  subtitleCard: string;
};

export const CardCircle = ({ titleCard, subtitleCard }: CardProps) => {
  return (
    <CardCircleStyle>
      <TitleCircleStyle>{titleCard}</TitleCircleStyle>
      <SubtitleCircleStyle>{subtitleCard}</SubtitleCircleStyle>
    </CardCircleStyle>
  );
};
