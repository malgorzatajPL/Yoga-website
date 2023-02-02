import { Header2, Subtitle } from '../../shared/TextComponents';
import {
  SubscribeBox,
  SubscribeButton,
  SubscribeInput,
  SubscribeStyle,
} from './Subscription.style';

export const Subscription = () => {
  return (
    <SubscribeStyle>
      <Header2>DONT MISS OUR UPDATE</Header2>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.{' '}
      </Subtitle>
      <SubscribeBox>
        <SubscribeInput type='text' placeholder='Your Email'></SubscribeInput>
        <SubscribeButton>Subscribe</SubscribeButton>
      </SubscribeBox>
    </SubscribeStyle>
  );
};
