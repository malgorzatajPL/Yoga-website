import { ButtonRead } from '../../shared/ButtonRead';
import { Header2, Subtitle } from '../../shared/TextComponents';
import {
  BestInstructionStyle,
  Content,
  ImageInstruction,
} from './BestInstruction.style';

const BestInstruction = () => {
  return (
    <BestInstructionStyle>
      <Content>
        <Header2>BEST INSTRUCTOR</Header2>
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
