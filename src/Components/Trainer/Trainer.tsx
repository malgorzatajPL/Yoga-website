import {
  BoxImageTrainer,
  ContentText,
  ContentTrainer,
  ImageTrainer,
  TitleTrainer,
  TrainerStyle,
} from './Trainer.style';

export const Trainer = () => {
  return (
    <TrainerStyle>
      <BoxImageTrainer>
        <ImageTrainer src='/Trainer.png' />
      </BoxImageTrainer>
      <ContentText>
        <ContentTrainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </ContentTrainer>
        <TitleTrainer>TRAINER DEVANDRA</TitleTrainer>
      </ContentText>
    </TrainerStyle>
  );
};
