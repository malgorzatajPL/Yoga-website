import { ButtonPrimary } from '../../shared/ButtonPrimary';
import { Header2, Subtitle } from '../../shared/TextComponents';
import { Content } from '../BestInstruction/BestInstruction.style';
import { ImageExperience, NewExperienceStyle } from './NewExperience.style';

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
        <ButtonPrimary primary={false} textButton='Read now' />
      </Content>
    </NewExperienceStyle>
  );
};

export default NewExperience;
