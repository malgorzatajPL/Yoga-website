import { Header } from '../../shared/HeadersBox';
import { Header1, Subtitle } from '../../shared/TextComponents';
import { CardOffer } from './CardOffer';
import { CardsContainer, PricingOfferStyle } from './Pricing.style';

const Pricing = () => {
  return (
    <PricingOfferStyle>
      <Header>
        <Header1 primary={false}>Our stats</Header1>
        <Subtitle primary={false} margin={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </Subtitle>
      </Header>
      <CardsContainer>
        <CardOffer
          titleOffer='NEWBIE CLASS'
          priceOffer='$00.00'
          imageOffer='/CardOffer.png'
          textOffer='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <CardOffer
          titleOffer='NEWBIE CLASS'
          priceOffer='$00.00'
          imageOffer='/CardOffer.png'
          textOffer='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <CardOffer
          titleOffer='NEWBIE CLASS'
          priceOffer='$00.00'
          imageOffer='/CardOffer.png'
          textOffer='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </CardsContainer>
    </PricingOfferStyle>
  );
};

export default Pricing;
