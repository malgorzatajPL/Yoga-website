import React from 'react';
import {
  BestInstructionStyle,
  Content,
  ImageInstruction,
} from './BestInstruction.style';
import { Subtitle, Header1 } from '../../shared/TextComponents';
import { ButtonRead } from '../../shared/ButtonRead';

const BestInstruction = () => {
  return (
    <BestInstructionStyle>
      <Content>
        <Header1>BEST INSTRUCTOR</Header1>
        <Subtitle padding='0 0 40px 0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{' '}
        </Subtitle>
        <ButtonRead primary={true} />
      </Content>
      <ImageInstruction src='/BestInstruction.png' />
    </BestInstructionStyle>
  );
};

export default BestInstruction;
