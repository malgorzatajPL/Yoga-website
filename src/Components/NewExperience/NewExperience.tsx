import React from 'react';
import { ImageExperience, NewExperienceStyle } from './NewExperience.style';
import { Header1, Header2, Subtitle } from '../../shared/TextComponents';
import { ButtonRead } from '../../shared/ButtonRead';
import { Content } from '../BestInstruction/BestInstruction.style';

const NewExperience = () => {
  return (
    <NewExperienceStyle>
      <ImageExperience src='/NewExperience.png' />
      <Content>
        <Header2 primary={true}>BEST INSTRUCTOR</Header2>
        <Subtitle primary={true} padding='0 0 40px 0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{' '}
        </Subtitle>
        <ButtonRead primary={false} />
      </Content>
    </NewExperienceStyle>
  );
};

export default NewExperience;
